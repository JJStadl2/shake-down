<?php

namespace App\Http\Controllers;

use App\Models\GearListItems;
use App\Models\GearLists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use stdClass;

class GearListItemsController extends Controller
{

    /**
     * index
     *
     * @param  mixed $listId
     * @return blade
     */
    public function index($listId)
    {
        $request = new Request();
        $user = Auth::user();
        $itemCategories = $this->getCategories($request);
        $listSortingOptions = GearLists::getSortingOptions();
        $listClasses = GearLists::getListClasses();
        $sortedItemCategories = [];
        $newCategory = Session::get('newCategory') ?? false;
        Session::forget('newCategory');
        try {
            $gearList = GearLists::where('id', $listId)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Unable to find list info.');
        }

        if (empty($gearList)) {
            return redirect()->back()->with('error', 'Unable to find list.');
        }

        $uom = $gearList->uom;
        $sort = ['category_order', 'ASC'];

        if ($gearList->list_items) {
            $sort = DB::table('list_sorting_options')->where('value', $gearList->sort)->first('order_by');
            $sort = explode(' ', $sort->order_by);
        }

        try {
            $gearListItems = GearListItems::getSortedListItems($listId, $sort, $uom);
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            $gearListItems = [];
        }

        $selectedCategories = GearListItems::getListSelectedCategories($gearListItems);

        if (!$gearList->list_items) {
            $sortedItemCategories = $this->getCategories($request, $selectedCategories);
        }

        GearLists::checkWeight($gearList);
        return view('gear-lists.gear-list-view', ['gearList' => $gearList, 'gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'listClasses' => $listClasses, 'selectedCategories' => $selectedCategories, 'sortedItemCategories' => $sortedItemCategories, 'newCategory'=>$newCategory]);
    }

    public function itemsMaster()
    {
        $request = new Request();
        $user = Auth::user();
        $userId = $user->id;
        $itemCategories = $this->getCategories($request);
        $listSortingOptions = GearLists::getSortingOptions();
        $userLists = GearLists::where('user_id', $userId)->where('master_list', false)->orderBy('id', 'ASC')->get(['id', 'name']);
        $sortedItemCategories = [];
        $sortByCategory = false;
        $masterGearList = GearLists::where('user_id', $userId)->where('master_list', true)->first();

        $sort_2 = ['list_order', 'ASC'];
        $sort_3 = ['category_order', 'ASC'];

        $by_2 = $sort_2[0];
        $order_2 = $sort_2[1];
        $by_3 = $sort_3[0];
        $order_3 = $sort_3[1];

        if ($masterGearList->list_items) {
            if ($masterGearList->sort !== 'drag_drop') {
                $sort = DB::table('list_sorting_options')->where('value', $masterGearList->sort)->first('order_by');
                $sort = explode(' ', $sort->order_by);
            } else {
                $sort = $sort_2;
            }
        } else {
            $sortByCategory = true;
        }

        if (empty($sort)) {
            $sort = $sort_3;
        }

        $by = $sort[0];
        $order = $sort[1];

        try {
            if (!$sortByCategory) {
                $gearListItems = GearListItems::where('user_id', $userId)->where('list_id', $masterGearList->id)->orderBy($by, $order)->orderBy($by_2, $order_2)->orderBy($by_3, $order_3)->get();
            } else {

                $gearListItems = GearListItems::where('user_id', $userId)->where('list_id', $masterGearList->id)->orderBy('category_order', 'ASC')->orderBy('list_order', 'ASC')->get();
            }
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Unable to find list info.');
        }

        $selectedCategories = GearListItems::getListSelectedCategories($gearListItems);

        if (!$masterGearList->list_items) {
            $sortedItemCategories = $this->getCategories($request, $selectedCategories);
        }

        return view('gear-lists.user-item-view',  ['gearList' => $masterGearList, 'gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'userLists' => $userLists, 'selectedCategories' => $selectedCategories, 'sortedItemCategories' => $sortedItemCategories]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $listId = $request->list_id;
        $user = Auth::user();
        $uom = $request->uom ?? false;

        try {
            $masterGearList = GearLists::where('user_id', $user->id)->where('master_list', true)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => "Error fetching find user's master list. Please try again later."]);
        }

        try {
            $gearList = GearLists::where('id', $listId)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list for adding item.']);
        }
        if (empty($gearList)) {
            return response()->json(['status' => '0', 'msg' => 'No list found for adding item.']);
        }

        if(empty($uom)){
            $uom = $gearList->uom;
        }

        $isNewCategory = $request->newCategory ?? false;
        $inputs = $request->except(['_token', 'q', 'id','newCategory']);
        $listItems = $gearList->list_items;
        $masterItem = new GearListItems();
        $gearListItem = new GearListItems();



        foreach ($inputs as $key => $value) {

            if (!$listItems && $key === 'item_category') {
                if (empty($value)) {
                    $value = 'unassigned';
                }
                $categoryOrder = GearListItems::where('list_id', $listId)->where('item_category', $value)->orderBy('list_order', 'desc')->first(['category_order', 'list_order']);
                $gearListItem->category_order = $categoryOrder->category_order ?? 1;
                $list_order = $categoryOrder->list_order ?? 0;
                $gearListItem->list_order = $list_order + 1;
                $masterItem->category_order = $categoryOrder->category_order ?? 1;
                $masterItem->list_order = $list_order + 1;
            }
            $gearListItem->$key = $value;
            $masterItem->$key = $value;
        }

        $gearListItem->master_list_id = $masterGearList->id;
        $gearListItem->uom = $uom;

        $masterItem->list_id = $masterGearList->id;
        $masterItem->master_list_id =  $masterGearList->id;
        $masterItem->uom = $uom;
        $masterItem->amount = 1;

        try {
            $masterItem->save();
            $gearListItem->master_item_id = $masterItem->id;
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error Saving item to master list.']);;
        }

        try {
            $gearListItem->save();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error Saving list item']);;
        }
        if($isNewCategory){
            Session::put('newCategory',$inputs['item_category']);
        }
        return response()->json(['status' => '1', 'newId' => $gearListItem->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $gearListItem = GearListItems::where('id', $id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => $e->getMessage()]);
        }
        if (empty($gearListItem)) {
            return response()->json(['status' => '0', 'msg' => 'No item Found']);
        }
        $listName = GearLists::where('id', $gearListItem->list_id)->first('name');
        $gearListItem->list_name = $listName->name;
        return response()->json(['status' => '1', 'msg' => '', 'item' => $gearListItem]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GearListItems $gearListItems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $updateMaster = $request->updateMaster ?? false;
        $isNewRow = $request->isNewRow ?? false;
        $inputs = $request->except(['_token', 'q', 'list_id', 'updateMaster', 'id','isNewRow']);

        try {
            $gearListItem = GearListItems::where('id',$id)->first();
         } catch (\Exception $e) {
             Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
             $gearListItem = [];
         }

         GearListItems::calculateItemWeight($gearListItem, $inputs);


        if($isNewRow){
            try {
                $masterItem = GearListItems::where('id',$id)->first('master_item_id');
                $masterItem = GearListItems::where('id',$masterItem->master_item_id)->first();

            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return response()->json(['status' => '0', 'msg' => 'Error fetching and updating master item.']);
            }
            GearListItems::calculateItemWeight($masterItem, $inputs);
        }

        if($updateMaster){
            return $this->updateAllChildItems($inputs, $id);
        }

        return response()->json(['status' => '1', 'msg' => 'updated']);
    }
    public function updateAllChildItems($inputs, $id){

        try {
            $gearListItems = GearListItems::where('master_item_id', $id)->get();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching all master list.']);
        }

        foreach($gearListItems as $gearListItem){

            try {
                GearListItems::where('id',$gearListItem->id)->update($inputs);
            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return response()->json(['status' => '0', 'msg' => 'Error updating list item']);
            }

        }
        return response()->json(['status' => '1', 'msg' => 'updated']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {

        try {
            $gearListItem = GearListItems::where('id', $id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error fetching item to delete. Try again later.');
        }

        if (empty($gearListItem)) {
            return redirect()->back()->with('error', 'No item found to delete.');
        }

        try {
            GearListItems::where('master_item_id',$gearListItem->id)->delete();
            $gearListItem->delete();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Failed to delete item.');
        }

        return redirect()->back()->with('success', 'Item permanently deleted from all gear lists.');
    }

    public function remove(Request $request, $id)
    {
        $gearListItem = GearListItems::where('id', $id)->first();

        if (empty($gearListItem)) {
            return redirect()->back()->with('error', 'No item found to remove.');
        }

        try {
            $gearListItem->delete();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Failed to remove item from list.');
        }

        return redirect()->back()->with('success', 'Item removed from this gear list.');
    }

    public function getCategories(Request $request, $selectedCategories = [])
    {
        $itemCategories = DB::table('item_categories')->orderBy('ordinal', 'ASC')->get(['category', 'value', 'ordinal']);

        if ($request->expectsJson()) {
            return response()->json($itemCategories);
        }

        if (!empty($selectedCategories)) {

            return $itemCategories->sortBy(function ($itemCategory) use ($selectedCategories) {
                if (in_array($itemCategory->value, $selectedCategories)) {
                    return array_search($itemCategory->value, $selectedCategories);
                } else {
                    return [];
                }
            })->values();
        }

        return $itemCategories;
    }

    public function sortGearItems(Request $request)
    {
        $response = [];
        $categoryId = $request->category_id;
        $orderedIds = $request->ordered_ids;
        $listId = $request->list_id;
        $isMasterItem = ($listId === 'master') ? true : false;

        $gearList = GearLists::where('id', $listId)->first();

        try {
            $gearList->sort = 'drag_drop';
            $gearList->save();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Failed to update the sortign attribute of the Gear list for these items.']);
        }

        if ($categoryId === 'list-items') {

            $sortItemsInListView = GearListItems::sortItemsForListView($orderedIds, $isMasterItem);
            if (!$sortItemsInListView) {
                $response = ['status' => '0', 'msg' => 'Failed to update the order of one or more items.'];
            } else {
                $response = ['status' => '1', 'msg' => 'Order of items updated!'];
            }
        }

        return response()->json($response);
    }

    public function sortGearListCategories(Request $request)
    {

        $categories = $request->category_order ?? [];

        if (empty($categories)) {
            return response()->json(['status' => '1', 'msg' => 'No change in category sort.']);
        }

        try {
            $gearListItems = GearListItems::where('list_id', $request->list_id)->get();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error getting Gear item data. Please try again later.']);
        }

        if (empty($gearListItems)) {
            return response()->json(['status' => '0', 'msg' => 'No items associacted with gear list. Please add gear items.']);
        }

        $sortedForCategoryView = GearListItems::sortItemsForCategoryView($gearListItems, $categories);

        if (!$sortedForCategoryView) {
            return response()->json(['status' => '0', 'msg' => 'Failed to sort gear items by category. Please try again later.']);
        }

        return response()->json(['status' => '1', 'msg' => 'Category sort updates.']);
    }
    public function addMasterGearItems(Request $request)
    {

        $inputs = $request->input();

        GearListItems::createNewMasterItems($inputs);
        return redirect()->back();
    }
    public function updateGearItemUOM(Request $request){

        $id = $request->id ?? false;
        $newUOM = $request->newUOM ?? false;
        $isNewRow = $request->isNewRow ?? false;
        $inputs = $request->except(['_token', 'q', 'id', 'newUOM', 'isNewRow']);

        if(empty($id) || empty($newUOM)){
            return response()->json(['status' => '0', 'msg' => 'No item Id provided.', 'item'=>[]]);
        }

        try {
            $gearListItem = GearListItems::where('id',$id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Failed to update and convert.', 'item'=>[]]);
        }
        if (empty($gearListItem) ?? $gearListItem->isEmpty()) {
            return response()->json(['status' => '0', 'msg' => 'Failed to update and convert.', 'item'=>[]]);
        }

        $item = GearListItems::updateItemUomValues($gearListItem,$newUOM, $inputs);

        if($gearListItem->list_id === $gearListItem->master_list_id){
            $masterItemId = $gearListItem->id;
            $updateInputs = $item->toArray();
            unset($updateInputs['id'],$updateInputs['list_id'],$updateInputs['master_list_id'],$updateInputs['created_at'] );
            $updateInputs['master_item_id'] = $masterItemId;
            try {
                 GearListItems::where('master_item_id',$masterItemId)->update($updateInputs);
            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return response()->json(['status' => '0', 'msg' => 'Failed to update and convert.', 'item'=>[]]);
            }


        }else if($isNewRow){
            try {
                $masterListItem = GearListItems::where('id',$gearListItem->master_item_id)->first();
            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return response()->json(['status' => '0', 'msg' => 'Failed to update and convert.', 'item'=>[]]);
            }
            GearListItems::updateItemUomValues($masterListItem,$newUOM, $inputs);

        }
        if(empty($item)){
            return response()->json(['status' => '0', 'msg' => 'Failed to update and convert.', 'item'=>[]]);
        }
        return response()->json(['status' => '1', 'msg' => 'updated and converted.', 'item'=>$item]);

    }

    public function getUserItemsToAssign($listId){

        if(empty($listId)){
            return response()->json(['status' => '0', 'msg' => 'No list Id provided.', 'userItems'=>[]]);
        }

        $userId = Auth::user()->id;
        $userItems = GearListItems::getUserItemsForAssignment($userId,$listId);

        if(empty($userItems)){
            return response()->json(['status' => '0', 'msg' => "You do not have any gear items saved that are not on this list. You can add items to this list directly, or add them in the your Gear Shed section.", 'userItems'=>[]]);
        }
        $userItems =  GearListItems::formatItemsForAssignment($userItems);
        return response()->json(['status' => '1', 'msg' => "items", 'userItems'=>$userItems]);
    }
}
