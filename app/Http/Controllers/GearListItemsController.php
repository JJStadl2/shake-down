<?php

namespace App\Http\Controllers;

use App\Models\GearListItems;
use App\Models\GearLists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

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
        $sort = DB::table('list_sorting_options')->where('value', $gearList->sort)->first('order_by');
        $sort = explode(' ', $sort->order_by);
        //$sort = ['item_category','ASC'];

        try {
            $gearListItems = GearListItems::getSortedListItems($listId, $sort, $uom);
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            $gearListItems = [];
        }

        $selectedCategories = GearListItems::getListSelectedCategories($gearListItems);
        GearLists::checkWeight($gearList);

        $gearList->list_items = false;
        return view('gear-lists.gear-list-view', ['gearList' => $gearList, 'gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'listClasses' => $listClasses, 'selectedCategories' => $selectedCategories]);
    }

    public function itemsMaster()
    {
        $request = new Request();
        $user = Auth::user();
        $userId = $user->id;
        $itemCategories = $this->getCategories($request);
        $listSortingOptions = GearLists::getSortingOptions();
        $listClasses = GearLists::getListClasses();

        try {
            $gearListItems = GearListItems::where('user_id', $userId)->get();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return redirect()->back()->with('error', 'Unable to find list info.');
        }
        return view('gear-lists.all-list-items', ['gearListItems' => $gearListItems, 'user' => $user, 'itemCategories' => $itemCategories, 'sortingOptions' => $listSortingOptions, 'listClasses' => $listClasses]);
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
        $gearListItem = new GearListItems();
        $inputs = $request->except(['_token', 'q', 'id']);

        foreach ($inputs as $key => $value) {
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
        $list_id = $request->list_id;
        $inputs = $request->except(['_token', 'q', 'list_id']);


        try {
            $gearList = GearLists::where('id', $list_id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list.']);
        }

        try {
            $gearListItem = GearListItems::where('id', $id)->where('list_id', $list_id)->first();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
            return response()->json(['status' => '0', 'msg' => 'Error fetching list item']);
        }

        //TODO fix calcuation bug
        $uomArray = GearListItems::$uomArray;

        foreach ($inputs as $key => $value) {
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
    public function getCategories(Request $request)
    {

        $itemCategories = DB::table('item_categories')->orderBy('ordinal', 'ASC')->get(['category', 'value']);

        if ($request->expectsJson()) {
            return response()->json($itemCategories);
        }
        return $itemCategories;
    }
}
