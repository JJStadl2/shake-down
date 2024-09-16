<?php

namespace App\Http\Controllers;

use App\Models\GearLists;
use App\Models\GearListItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GearListsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        if(empty($user)){
            return redirect()->back()->with('error','Please login');
        }

        $gearLists = GearLists::where('user_id',$user->id)->get();

        if(!count($gearLists)){
            return redirect('/gear-list')->with('info','Please create a gear list.');
        }

        return view('gear-lists.user-list-index',['gearLists'=>$gearLists,'user'=>$user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $listSortingOptions = GearLists::getSortingOptions();
        $listClasses = GearLists::getListClasses();
        return view('gear-lists.create',['sortOptions'=>$listSortingOptions,'listClasses'=>$listClasses]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $gearList = new GearLists();
        $gearList->user_id = $user->id;
        $gearList->name = $request->listName;
        $gearList->notes = $request->listNotes ?? '';
        $gearList->sort = $request->sortBy ?? 'cat_asc';
        $gearList->uom = $request->uom ?? 'us';
        $gearList->list_class = $request->listClass ?? 'hvy';
        $gearList->list_items = $request->list_items ?? true;

        try{
            $gearList->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to save list at this time.')->withInput();
        }

        $gearList->weightUom = ($gearList->uom === 'us') ? 'LBS' : 'KG';
        return redirect('/list-items/'.$gearList->id);

    }

    /**
     * Display the specified resource.
     */
    public function show(GearLists $gearLists)
    {
        //
    }

    public function getListChartData($id){

        try{
            $gearList = GearLists::where('id',$id)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error fetching analytics.']);
        }

        if(empty($gearList)){
            return response()->json(['status'=>'0','msg'=>'No gear list found.']);
        }

        $chartData = json_encode(GearLists::getChartData($gearList));
        return response()->json(['status'=>'1','chartData'=>$chartData]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GearLists $gearLists)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Log::debug(__FILE__.' '.__LINE__.' request for update list header: '.print_r($request->input(),true));
        $inputs = $request->input();

        try{
            $gearList = GearLists::where('id',$id)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error fetching list data']);
        }

        if(empty($gearList)){
            return response()->json(['status'=>'0','msg'=>'Error. No list found.']);;
        }

        foreach($inputs as $key => $value){
            if($key === 'sort' && !$gearList->list_items && $value !== 'drag_drop'){
                $gearList->list_items = true;
            }
            $gearList->$key = $value;
        }

        try{
            $gearList->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error updating list.']);
        }

        return response()->json(['status'=>'1','msg'=>'Updated list.']);;
    }

    /**
     * Remove the specified resource from storage.
     */
    /*
    TODO master user item list-> all items from all lists and allow user to manage and insert into other
    lists as need with all data.
    */
    public function destroy(Request $request, $id)
    {
        $gearList = GearLists::where('id',$id)->first();
        $gearListItems = GearListItems::where('list_id',$id)->get();

        try{
            $gearList->delete();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Failed to deleted list.');
        }

        // try{
        //     foreach($gearListItems as $item){
        //         $item->delete();
        //     }

        // }catch(\Exception $e){
        //     Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
        //     return redirect()->back()->with('error','List deleted but failed to delte items.');
        // }

        return redirect()->back()->with('success','List and items deleted.');

    }
    public function removeCategory($listId,$category){
        Log::debug(__FILE__.' '.__LINE__.' list id in remove cate: '.$listId);
        Log::debug(__FILE__.' '.__LINE__.' cat in remove cate: '.$category);
        try{
            $gearListItems = GearListItems::where('list_id',$listId)->where('item_category',$category)->get();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Failed to remove category from list.');
        }

        if(empty($gearListItems)){
            return redirect()->back()->with('error','Category not found in list.');
        }

        foreach($gearListItems as $item){
            //$listItem = GearListItems::where('id',$item->id)->first();
            $item->list_id = '';

            try{
                $item->save();
            }catch(\Exception $e){
                Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                return redirect()->back()->with('error','Failed to save changes to list.');
            }

        }

        return redirect()->back()->with('success','Gear list updated.');
    }

}
