<?php

namespace App\Http\Controllers;

use App\Models\GearListItems;
use App\Models\GearLists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
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
        $listClasses = GearLists::getListClasses();
        $options = new stdClass();
        $options->list_items = true;
        $options->sort = 'name_desc';

        try {
            $gearListItems = GearListItems::where('user_id', $userId)->get();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Unable to find list info.');
        }
        return view('gear-lists.all-list-items', ['gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'listClasses' => $listClasses]);
        //return view('gear-lists.user-item-view', ['gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'listClasses' => $listClasses, 'options'=>$options]);
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
        Log::debug(__FILE__.' '.__LINE__.' request for update item: '.print_r($request->input(),true));
        $listId = $request->list_id;
        if($listId === 'all'){
            return response()->json(['status' => '0', 'msg' => 'update from all items.']);
        }
        $inputs = $request->except(['_token', 'q', 'list_id']);

        try {
            $gearList = GearLists::where('id', $listId)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list.']);
        }

        $listItems = $gearList->list_items;

        try {
            $gearListItem = GearListItems::where('id', $id)->where('list_id', $listId)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list item']);
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

        return redirect()->back()->with('success', 'Item deleted.');
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

        return redirect()->back()->with('success', 'Item removed.');
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

        if ($categoryId === 'list-items') {

            $gearList = GearLists::where('id', $listId)->first();

            try {
                $gearList->sort = 'drag_drop';
                $gearList->save();
            } catch (\Exception $e) {
                Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
                return response()->json(['status' => '0', 'msg' => 'Failed to update the sortign attribute of the Gear list for these items.']);
            }

            $sortItemsInListView = GearListItems::sortItemsForListView($orderedIds);
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

        if(empty($categories)){
            return response()->json(['status'=>'1','msg'=>'No change in category sort.']);
        }

        try{
            $gearListItems = GearListItems::where('list_id', $request->list_id)->get();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error getting Gear item data. Please try again later.']);
        }

        if(empty($gearListItems)){
            return response()->json(['status'=>'0','msg'=>'No items associacted with gear list. Please add gear items.']);
        }

        $sortedForCategoryView = GearListItems::sortItemsForCategoryView($gearListItems,$categories);

        if(!$sortedForCategoryView){
            return response()->json(['status'=>'0','msg'=>'Failed to sort gear items by category. Please try again later.']);
        }

        return response()->json(['status'=>'1','msg'=>'Category sort updates.']);

    }
}
