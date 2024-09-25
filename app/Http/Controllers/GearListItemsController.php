<?php

namespace App\Http\Controllers;

use App\Models\GearListItems;
use App\Models\GearLists;
use App\Models\UserItems;
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

        if($gearList->list_items){
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

        if(!$gearList->list_items){
            $sortedItemCategories = $this->getCategories($request, $selectedCategories);
        }

        GearLists::checkWeight($gearList);

        return view('gear-lists.gear-list-view', ['gearList' => $gearList, 'gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'listClasses' => $listClasses, 'selectedCategories' => $selectedCategories, 'sortedItemCategories'=>$sortedItemCategories]);
    }

    public function itemsMaster()
    {
        $request = new Request();
        $user = Auth::user();
        $userId = $user->id;
        $itemCategories = $this->getCategories($request);
        $listSortingOptions = GearLists::getSortingOptions();
     //   $userLists = GearLists::where('user_id',$userId)->orderBy('id','ASC')->get(['id','name']);
        $sortedItemCategories = [];
        $sortByCategory = false;
        $masterItemOptions = Session::get('masterItemOptions') ?? [];

        if(empty($masterItemOptions)){
            $masterItemOptions = new stdClass();
            $masterItemOptions->list_items = true;
            $masterItemOptions->sort = 'name_asc';
        }

        $sort_2 = ['master_category_order', 'ASC'];
        $sort_3 = ['master_list_order','ASC'];
        $by_2 = $sort_2[0];
        $order_2 = $sort_2[1];
        $by_3 = $sort_3[0];
        $order_3 = $sort_3[1];

        if($masterItemOptions->list_items){
            if($masterItemOptions->sort !== 'drag_drop'){
                $sort = DB::table('list_sorting_options')->where('value', $masterItemOptions->sort)->first('order_by');
                $sort = explode(' ', $sort->order_by);

            }else{
                $sort = $sort_2;
            }
        }else{
            $sortByCategory = true;
        }

        if(empty($sort)){
            $sort = $sort_3;
        }

        $by = $sort[0];
        $order = $sort[1];
        $userListArray = UserItems::where('user_id',$userId)->pluck('list_id')->toArray();
        Log::debug("user list as array:" .print_r($userListArray,true));
        try {
            if(!$sortByCategory){
                $gearListItems = GearListItems::where('user_id', $userId)->whereIn('list_id',$userListArray)->orderBy($by,$order)->orderBy($by_2,$order_2)->orderBy($by_3,$order_3)->get();
            }else{

                $gearListItems = GearListItems::where('user_id', $userId)->orderBy('master_category_order','ASC')->orderBy('master_list_order','ASC')->get();
            }

        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Unable to find list info.');
        }

        $selectedCategories = GearListItems::getListSelectedCategories($gearListItems);
        $gearListItems = $gearListItems->unique('user_item_id');

        if(!$masterItemOptions->list_items){
            $sortedItemCategories = $this->getCategories($request, $selectedCategories);
        }

        Session::put('masterItemOptions',$masterItemOptions);
        // return view('gear-lists.user-item-view',  ['gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions,  'masterItemOptions'=>$masterItemOptions,'userLists'=>$userLists, 'selectedCategories' => $selectedCategories, 'sortedItemCategories'=>$sortedItemCategories]);
        return view('gear-lists.user-item-view',  ['gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions,  'masterItemOptions'=>$masterItemOptions, 'selectedCategories' => $selectedCategories, 'sortedItemCategories'=>$sortedItemCategories]);

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

        $userItem = new UserItems();
        $userItemId = $userItem->createAndReturnId($listId);

        try {
            $gearList = GearLists::where('id', $listId)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list for adding item.']);
        }
        if(empty($gearList)){
            return response()->json(['status' => '0', 'msg' => 'No list found for adding item.']);
        }

        $listItems = $gearList->list_items;
        $gearListItem = new GearListItems();
        $inputs = $request->except(['_token', 'q', 'id']);
        $inputs['user_item_id'] = $userItemId;

        foreach ($inputs as $key => $value) {
            if(!$listItems && $key === 'item_category'){
                if(empty($value)){
                    $value = 'unassigned';
                }
                $categoryOrder = GearListItems::where('list_id',$listId)->where('item_category',$value)->orderBy('list_order','desc')->first(['category_order','list_order']);
                $gearListItem->category_order = $categoryOrder->category_order ?? 1;
                $list_order = $categoryOrder->list_order ?? 0;
                $gearListItem->list_order = $list_order +1;
            }
            $gearListItem->$key = $value;
        }

        try {
            $gearListItem->save();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error Saving list item']);;
        }

        return response()->json(['status' => '1', 'newId' => $gearListItem->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(GearListItems $gearListItems)
    {
        //
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
        $listId = $request->list_id;
        $isMasterItem = false;

        if($listId === 'master'){

            $isMasterItem = true;
            $gearList = Session::get('masterItemOptions');

        }else{

            try {
                $gearList = GearLists::where('id', $listId)->first();
            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return response()->json(['status' => '0', 'msg' => 'Error fetching list.']);
            }
        }

        $inputs = $request->except(['_token', 'q', 'list_id']);
        $listItems = $gearList->list_items;

        try {
            $gearListItem = GearListItems::where('id', $id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list item']);
        }

        foreach ($inputs as $key => $value) {
            if(!$listItems && $key === 'item_category'){
                if(empty($value)){
                    $value = 'unassigned';
                }
                if($isMasterItem){
                    $categoryOrder = GearListItems::where('item_category',$value)->first('master_category_order');
                    $gearListItem->master_category_order = $categoryOrder->master_category_order ?? 1;
                }else{
                    $categoryOrder = GearListItems::where('list_id',$listId)->where('item_category',$value)->first('category_order');
                    $gearListItem->category_order = $categoryOrder->category_order ?? 1;
                }

            }
            //TODO--> ADD CHECK FOR WHEN MASTER ITEM AND LIST ID UNASSIGNED.
            $gearListItem->$key = $value;
        }

        try {
            $gearListItem->save();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error updating list item']);
        }

        return response()->json(['status' => '1', 'msg' => 'updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $gearListItem = GearListItems::where('id', $id)->first();

        if (empty($gearListItem)) {
            return redirect()->back()->with('error', 'No item found to delete.');
        }

        try {
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
            $gearListItem->list_id = '';
            $gearListItem->save();
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

        if(!empty($selectedCategories)){

            return $itemCategories->sortBy(function ($itemCategory) use ($selectedCategories) {
                if(in_array($itemCategory->value, $selectedCategories)){
                    return array_search($itemCategory->value, $selectedCategories);
                }else{
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

        if ($categoryId === 'list-items') {

            if(!$isMasterItem){
                $gearList = GearLists::where('id', $listId)->first();

                try {
                    $gearList->sort = 'drag_drop';
                    $gearList->save();
                } catch (\Exception $e) {
                    Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                    return response()->json(['status' => '0', 'msg' => 'Failed to update the sortign attribute of the Gear list for these items.']);
                }
            }else{
                $masterItemOptions = Session::get('masterItemOptions');
                $masterItemOptions->sort = 'drag_drop';
                Session::put('masterItemOptions',$masterItemOptions);
            }

            $sortItemsInListView = GearListItems::sortItemsForListView($orderedIds,$isMasterItem);
            if (!$sortItemsInListView) {
                $response = ['status' => '0', 'msg' => 'Failed to update the order of one or more items.'];
            } else {
                $response = ['status' => '1', 'msg' => 'Order of items updated!'];
            }
        }

        return response()->json($response);
    }

    public function sortGearListCategories(Request $request){

        $categories = $request->category_order ?? [];
        $isMasterItem = ($request->list_id === 'master') ? true : false;
        $userId = Auth::user()->id;

        if(empty($categories)){
            return response()->json(['status'=>'1','msg'=>'No change in category sort.']);
        }

        if(!$isMasterItem){
            try{
                $gearListItems = GearListItems::where('list_id', $request->list_id)->get();
            }catch(\Exception $e){
                Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                return response()->json(['status'=>'0','msg'=>'Error getting Gear item data. Please try again later.']);
            }
        }else{
            try{
                $gearListItems = GearListItems::where('user_id', $userId)->get();
            }catch(\Exception $e){
                Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                return response()->json(['status'=>'0','msg'=>'Error getting Gear item data. Please try again later.']);
            }
        }


        if(empty($gearListItems)){
            return response()->json(['status'=>'0','msg'=>'No items associacted with gear list. Please add gear items.']);
        }

        $sortedForCategoryView = GearListItems::sortItemsForCategoryView($gearListItems,$categories, $isMasterItem);

        if(!$sortedForCategoryView){
            return response()->json(['status'=>'0','msg'=>'Failed to sort gear items by category. Please try again later.']);
        }

        return response()->json(['status'=>'1','msg'=>'Category sort updates.']);

    }
}
