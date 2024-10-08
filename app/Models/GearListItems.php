<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;

class GearListItems extends Model
{
    use HasFactory;
    use SoftDeletes;

    public static int $usConversionFactor = 16;
    public static int $metricConversionFactor = 1000;
    public static float $gramsToOunceConversionFactor = 0.035274;
    public static float $ouncesToGramsConversionFactor = 28.34952;
    public static float $poundToGramsConversionFactor = 453.592;
    public static $uomArray = ['in_ounces' => false, 'in_lbs' => false, 'in_grams' => false, 'in_kilos' => false];
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'list_id',
        'user_id',
        'master_item_id',
        'item_name',
        'item_category',
        'minimum_unit_weight',
        'item_weight',
        'in_grams',
        'in_ounces',
        'in_lbs',
        'in_kilos',
        'amount',
        'list_order',
        'category_order',
        'master_list_id',
        'uom'

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [];
    }

    /**
     * getSortedListItems
     *
     * @param  mixed $listId
     * @param  mixed $sort
     * @return object
     * Uses raw sql because it is more readable than Eloquent for this specific query.
     * Sorts based on smallest scale unit of measure when sorting by weight.
     */
    public static function getSortedListItems($listId, $sort, $uom)
    {

        $by = $sort[0];
        $order = $sort[1];

        if ($uom === 'us') {
            $conversionFactor = self::$usConversionFactor;
        } else {
            $conversionFactor = self::$metricConversionFactor;
        }

        if (!str_contains($by, 'weight')) {

            $sql = ' SELECT *
                    FROM gear_list_items';
        } else {
            $sql = " SELECT *,
                    CASE
                        WHEN (in_grams = 1 OR in_ounces = 1) THEN item_weight
                        WHEN (in_lbs = 1 OR in_kilos = 1) THEN item_weight * $conversionFactor
                        ELSE 0
                    END AS item_unit_weight
                    FROM gear_list_items";

            $by = 'item_unit_weight';
        }

        $sql .= ' WHERE list_id = ? AND deleted_at IS NULL';

        if ($by === 'category_order') {
            $sql .= " ORDER BY category_order $order, list_order ASC";
        } else {
            $sql .= " ORDER BY $by COLLATE NOCASE $order";
        }

        $params = [$listId];

        try {
            $gearListItems = DB::select($sql, $params);
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return [];
        }

        return $gearListItems;
    }
    public static function getListSelectedCategories($gearListItems)
    {
        $selectedCategories = [];

        foreach ($gearListItems as $item) {
            if (empty($item->item_category)) {
                $item->item_category = 'unassigned';
            }
            $selectedCategories[] = $item->item_category;
        }

        return array_unique($selectedCategories);
    }
    public static function sortItemsForListView($orderedIds)
    {

        foreach ($orderedIds as $order => $id) {
            if (!empty($id)) {
                try {
                    DB::table('gear_list_items')
                        ->where('id', $id)
                        ->update( ['list_order' => $order]);
                } catch (\Exception $e) {
                    Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                    return false;
                }
            }
        }
        return true;
    }

    public static function sortItemsForCategoryView($gearListItems, $sortedCategories)
    {

        foreach ($gearListItems as $item) {
            foreach ($sortedCategories as $categoryOrder) {
                if ($item->item_category === $categoryOrder['item_category']) {

                    try {
                        DB::table('gear_list_items')
                            ->where('id', $item->id)
                            ->update(['category_order' => $categoryOrder['category_order']]);
                    } catch (\Exception $e) {
                        Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                        return false;
                    }
                }
            }
        }
        return true;
    }
    public static function createNewMasterItems($inputs)
    {
        $user = Auth::user();
        $masterListId = $user->master_list_id;
        $itemCount = $inputs['newItemCount'] ?? 0;
        $amount = 1;
        for ($i = 0; $i < $itemCount; $i++) {

            $uomArray = self::$uomArray;
            $inputUomArray = $uomArray;
            $masterItem = new GearListItems();
            $masterItem->list_id = $masterListId;
            $masterItem->master_list_id = $masterListId;
            $masterItem->user_id = $user->id;
            $masterItem->item_name = $inputs['itemName'][$i] ?? '';
            $masterItem->item_category = $inputs['itemCategory'][$i] ?? 'unassigned';
            $masterItem->item_weight = $inputs['itemWeight'][$i] ?? 0;
            $masterItem->amount = $amount;
            $masterItem->total_line_weight =  $masterItem->item_weight *  $amount;
            $masterItem->list_order = 0;
            $masterItem->category_order = 0;
            $masterItem->uom = ($inputs['uom'][$i] === 'in_ounces' || $inputs['uom'][$i] === 'in_lbs') ? 'us' : 'metric';

            $listOrders = self::getCategoryOrder($masterItem->item_category);

            if (!empty($listOrders)) {

                $masterItem->list_order = $listOrders->max_list_order + 1;
                $masterItem->category_order = $listOrders->max_category_order + 1;
            }

            foreach ($uomArray as $key => $value) {
                $masterItem->$key = false;
                $inputUomArray[$key] = false;
                if ($inputs['uom'][$i] === $key) {
                    $masterItem->$key = true;
                    $inputUomArray[$key] = true;
                }
            }
            try {
                $masterItem->save();
            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return false;
            }
            static::calculateItemWeight($masterItem,$inputUomArray );
        }
        return true;
    }

    public static function getCategoryOrder($itemCategory)
    {
        $user = Auth::user();
        $sql = 'SELECT MAX(COALESCE(list_order,0)) AS max_list_order, MAX(COALESCE(category_order,0)) AS max_category_order
                FROM gear_list_items
                WHERE deleted_at IS NULL
                AND user_id = ?
                AND item_category = ?';

        $params = [$user->id, $itemCategory];

        try {
            $orders = DB::select($sql, $params);
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return [];
        }

        return $orders[0];
    }


    public static function updateItemUomValues($gearListItem, $newUOM, $inputs)
    {
        $newUnit = static::findUnitInputValue($inputs);

        if ($newUnit === 'in_grams') {
            $gearListItem->item_weight = $gearListItem->minimum_unit_weight;
         }
         else if($newUnit === 'in_kilos') {
              $gearListItem->item_weight = $gearListItem->minimum_unit_weight/static::$metricConversionFactor;
         }
        else if ($newUnit == 'in_ounces') {
            $gearListItem->item_weight = $gearListItem->minimum_unit_weight * static::$gramsToOunceConversionFactor;
        }
        else if($newUnit == 'in_lbs') {
           $gearListItem->item_weight = ($gearListItem->minimum_unit_weight * static::$gramsToOunceConversionFactor)/ static::$usConversionFactor;
        }
        else if($newUnit == 'in_ounces') {
            $gearListItem->item_weight = ($gearListItem->minimum_unit_weight * static::$gramsToOunceConversionFactor);
        }
        else if($newUnit == 'in_lbs') {
            $gearListItem->item_weight = ($gearListItem->minimum_unit_weight * static::$gramsToOunceConversionFactor)/ static::$usConversionFactor;

        }

        $gearListItem->minimum_unit_weight = round($gearListItem->minimum_unit_weight,3);
        $gearListItem->item_weight = round($gearListItem->item_weight,3);
        $gearListItem->total_line_weight = $gearListItem->item_weight * $gearListItem->amount;
        $gearListItem->uom = $newUOM;

        $gearListItem->in_ounces = $inputs['in_ounces'] ?? false;
        $gearListItem->in_grams = $inputs['in_grams'] ?? false;
        $gearListItem->in_lbs = $inputs['in_lbs'] ?? false;
        $gearListItem->in_kilos = $inputs['in_kilos'] ?? false;

        try {
            $gearListItem->save();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return false;
        }

        return $gearListItem;
    }
    public static function calculateItemWeight(&$gearListItem,$inputs, $uom = false){
        $newUnit = static::findUnitInputValue($inputs);

        $itemWeight = $inputs['item_weight'] ??  $gearListItem->item_weight;
        $uom = $inputs['uom'] ?? $gearListItem->uom;
        if(empty($uom)){
            $uom = $gearListItem->uom;
        }
        if ( $newUnit == 'in_grams') {
            $gearListItem->minimum_unit_weight = $itemWeight;
        }
        else  if ( $newUnit == 'in_kilos') {
            $gearListItem->minimum_unit_weight = $itemWeight * static::$metricConversionFactor;
        }
        else  if ( $newUnit == 'in_ounces') {
            $gearListItem->minimum_unit_weight = $itemWeight * static::$ouncesToGramsConversionFactor;
        }
        else  if ( $newUnit == 'in_lbs') {
            $gearListItem->minimum_unit_weight = $itemWeight * static::$poundToGramsConversionFactor;
        }

        foreach($gearListItem->getAttributes() as $key => $value){
            if(array_key_exists($key,$inputs)){
                $gearListItem->$key = $inputs[$key];
            }

        }

        $gearListItem->uom = $uom;
        $gearListItem->minimum_unit_weight = round($gearListItem->minimum_unit_weight,3);
        $gearListItem->item_weight = round($itemWeight,3);
        $gearListItem->total_line_weight = $gearListItem->item_weight * $gearListItem->amount;
        try {
            $gearListItem->save();
         } catch (\Exception $e) {
             Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());

         }


    }

    public function createAndAssignNewItem(&$gearItem, $masterItemId){

        $currentItem = GearListItems::where('id',$masterItemId)->first();
        $currentItem->list_id = '';
        unset( $currentItem->id);

        foreach($currentItem->getAttributes() as $key => $value){
            $gearItem->$key = $value;
        }

    }

    public static function updateGearItem($gearList,$id, $inputs ){

        $listItems = $gearList->list_items ?? true;
        $isMasterItem = $gearList->master_list ?? false;
        $listId = $gearList->id;

        try {
            $gearListItem = GearListItems::where('id', $id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return [];
        }

        foreach ($inputs as $key => $value) {
            if(!$listItems && $key === 'item_category'){
                if(empty($value)){
                    $value = 'unassigned';
                }
                $categoryOrder = GearListItems::where('list_id',$listId)->where('item_category',$value)->first('category_order');
                $gearListItem->category_order = $categoryOrder->category_order ?? 1;

            }
            $gearListItem->$key = $value;
        }
        return $gearListItem;

    }

    public static function getItemAssignments($masterItemId){

        $userId = Auth::user()->id;

        try{

            $itemAssignments =  GearListItems::where('user_id',$userId)->where('master_item_id',$masterItemId)->get(['id','list_id']);

        }catch(\Exception $e){
           Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
           $itemAssignments = [];
        }

        $assignments = [];

        foreach($itemAssignments as $item){

             $assignments[] = $item->list_id;
        }

        return $assignments;
    }

    public static function manageListAssigments($request){
        $listIds = $request->listIds ?? [];
        $masterItemId = $request->assignItemId ?? false;
        $userId = Auth::user()->id;
        $response = ['status'=>1,'msg'=>'Item assigned.'];
        $failedLIstIds = [];

        try{

            $itemListAssignments = GearListItems::where('user_id',$userId)->where('master_item_id',$masterItemId)->pluck('list_id')->toArray();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            $itemListAssignments = [];

        }
        if(empty($itemListAssignments)){
            $response['status'] = 0;
            $response['msg'] = 'Cannot find this item in this user account.';
           // return $response;
           // return 0;
        }

        foreach($itemListAssignments as $key => $value){

            $index = array_search(intval($value),$listIds);

            if($index !== false){
               unset($listIds[$index]);
            }else{
                try{

                    GearListItems::where('list_id',$value)->where('master_item_id',$masterItemId)->delete();
                }catch(\Exception $e){
                    Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                    $failedLIstIds[] = $value;
                    continue;
                }

            }
        }

        foreach($listIds as $listId){
            if(!in_array($listId,$failedLIstIds)){

                $gearItem = new GearListItems();
                $gearItem->createAndAssignNewItem($gearItem,$masterItemId);
                $gearItem->item_name = $gearItem->item_name;
                $gearItem->list_id = $listId;
                $gearItem->master_item_id = $masterItemId;

                try{
                    $gearItem->save();
                }catch(\Exception $e){
                    Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                    $failedLIstIds[] = $listId;
                    continue;
                }

                if(!empty($userItem)){
                    try{
                        $gearItem->save();
                    }catch(\Exception $e){
                        Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                        $failedLIstIds[] = $listId;
                        continue;
                    }
                }
            }

        }
        if(!empty($failedLIstIds)){
            $response['status'] = 0;
            $response['msg'] = 'Error while updating some item assignments. Please try again later';
        }
        return $response;
    }
    public static function findUnitInputValue($inputs){
        foreach($inputs as $key => $value){
            if(str_starts_with($key,'in_') && $value == true){
                return $key;
            }
        }
    }
    public static function getUserItemsForAssignment($userId,$listId){

        $sql = "SELECT  gli.*, ic.category AS 'category'
                FROM gear_list_items gli INNER JOIN item_categories ic ON gli.item_category = ic.value
                WHERE master_item_id IS NULL
                 AND user_id = ?
                AND gli.id NOT IN (SELECT master_item_id FROM gear_list_items WHERE list_id = ?)";



        $params = [$userId, $listId];

        try{
            $userItems = DB::select($sql,$params);
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            $userItems = [];

        }

        return $userItems;

    }
    public static function formatItemsForAssignment($userItems){

        $response = [];

        foreach($userItems as $item){
            $uom = '';
            if($item->in_ounces){
                $uom = 'OZ';
            }else if( $item->in_lbs){
                $uom = 'LBS';
            }else if($item->in_grams){
                $uom = 'G';
            }else{
                $uom = 'KG';
            }

            $response[] = ['item_id'=>$item->id,'item_name'=> $item->item_name, 'item_category'=>$item->category, 'item_weight' => $item->item_weight, 'uom'=> $uom];
        }

        return $response;


    }
}
