<?php

namespace App\Http\Controllers;

use App\Models\GearLists;
use App\Models\GearListItems;
use App\Models\UserItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

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

        $gearLists = GearLists::where('user_id',$user->id)->where('master_list',false)->get();

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
    public function show($id)
    {
        $listSortingOptions = GearLists::getSortingOptions();
        $listClasses = GearLists::getListClasses();
        try{
            $gearList = GearLists::where('id',$id)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Faild to find list to edit.')->withInput();
        }

        if(empty($gearList)){
            return redirect()->back()->with('error','No gear list found.')->withInput();
        }
        return view('gear-lists.edit',['gearList'=>$gearList,'sortOptions'=>$listSortingOptions,'listClasses'=>$listClasses]);
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
    public function edit(Request $request)
    {
        $id = $request->id ?? false;
        $inputs = $request->except(['_token', 'q', 'id']);
        $updatItemUOM = false;
        $oldUOM = '';

        if(empty($id)){
            return redirect()->back()->with('error','No list id provided. Please try again later')->withInput();
        }

        try{
            $gearList = GearLists::where('id',$id)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Failed to find list to edit.')->withInput();
        }

        if(empty($gearList)){
            return redirect()->back()->with('error','No gear list found.')->withInput();
        }
        foreach($inputs as $key => $value){
            //TODO-> Add weight conversion from us-> metric for all items and check/for when Item is added from master items view.
            if($key === 'uom' && $value !== $gearList->uom){
                $oldUOM = $gearList->uom;
                $updatItemUOM = true;

            }
            $gearList->$key = $value;
        }

        try{
            $gearList->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Failed save changes to list.')->withInput();
        }

        if($updatItemUOM){
            $updatItemUOM = GearListItems::updateItemUomValues($id, $oldUOM);
            if(!$updatItemUOM){
                return redirect()->back()->with('error','Gear List changes saved, but an error occurred when updatig the gear items weight values.')->withInput();
            }
        }
        return redirect()->back()->with('success','Changes saved.')->withInput();

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
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

        return response()->json(['status'=>'1','msg'=>'Updated list.']);
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

        try{
            $gearListItems = GearListItems::where('list_id',$listId)->where('item_category',$category)->get();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Failed to remove category from list.');
        }

        if(empty($gearListItems)){
            return redirect()->back()->with('error','Category not found in list.');
        }

        $isMaster = ($gearListItems[0]->list_id === $gearListItems[0]->master_list_id) ? true : false;
        $masterListId =  $gearListItems[0]->master_list_id;

        foreach($gearListItems as $item){

            try{
                $item->delete();
            }catch(\Exception $e){
                Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                return redirect()->back()->with('error','Failed to save changes to list.');
            }

        }
        if($isMaster){
            GearListItems::where('master_list_id',$masterListId)->where('item_category',$category)->delete();
        }

        return redirect()->back()->with('success','Gear list updated.');
    }

    public function updateSession(Request $request){

        $masterItemOptions = Session::get('masterItemOptions') ?? [];

        foreach($request->input() as $key => $value){

            $masterItemOptions->$key = $value;
        }
        Session::put('masterItemOptions',$masterItemOptions);

        return response()->json(['status'=>'1','msg'=>'Updated session vars.']);
    }

    public function getUserLists($itemId){

        $userId = Auth::user()->id;

        if(empty($userId)){
            return response()->json(['status'=>'0','msg'=>'No user ID provided.']);
        }

        try{
             $userLists = GearLists::where('user_id',$userId)->where('master_list',false)->orderBy('id','ASC')->get(['id','name']);

        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error fetching gear lists for user.']);
        }

        if(empty($userLists)){
            return response()->json(['status'=>'0','msg'=>'No  gear lists found for this user.']);
        }

        $assignedListArray = GearListItems::getItemAssignments($itemId);
        foreach($userLists as $list){

            if(in_array($list->id, $assignedListArray)){
                $list->itemAssigned = true;
            }else{
                $list->itemAssigned = false;
            }

        }

        return response()->json(['status'=>'1','userLists' => $userLists, 'msg'=>'Lists!']);

    }
    public function assignMasterItem(Request $request){

        $masterItemId = $request->assignItemId ?? false;

        if(empty($masterItemId)){
            return redirect()->back()->with('error','No item provided.');
        }

        $response =  GearListItems::manageListAssigments($request);

        if($response['status'] !== 1){
            return redirect()->back()->with('warning',$response['msg']);
        }

        return redirect()->back()->with('success',$response['msg']);

    }

}
