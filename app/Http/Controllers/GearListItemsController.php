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
     * Display a listing of the resource.
     */
    public function index($listId)
    {
        $request = new Request();
        $user = Auth::user();
        $itemCategories = $this->getCategories($request);

        try{
            $gearList = GearLists::where('id',$listId)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to find list info.');
        }
        try{
            $gearListItems = GearListItems::where('list_id',$listId)->orderBy('id')->get();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            $gearListItems = [];
        }

        if($gearListItems->isEmpty()){
            $gearListItems = [];
        }

        return view('gear-lists.gear-list',['gearList'=>$gearList,'gearListItems'=>$gearListItems,'user'=>$user, 'itemCategories'=>$itemCategories]);
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
        $inputs = $request->except(['_token','q','id']);

        foreach($inputs as $key => $value){
            $gearListItem->$key = $value;
        }

        try{
            $gearListItem->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error Saving list item']);;
        }

        return response()->json( ['status'=>'1','newId'=>$gearListItem->id]);
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
        $inputs = $request->except(['_token','q','list_id']);

        try{
            $gearListItem = GearListItems::where('id',$id)->where('list_id',$list_id)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error fetching list item']);;
        }

        foreach($inputs as $key => $value){
            $gearListItem->$key = $value;
        }

        try{
            $gearListItem->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error updating list item']);;
        }

        return response()->json( ['status'=>'1','msg'=>'updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GearListItems $gearListItems)
    {
        //
    }
    public function getCategories(Request $request){

        $itemCategories = DB::table('item_categories')->orderBy('ordinal','ASC')->get(['category','value']);

        if($request->expectsJson()){
            return response()->json($itemCategories);
        }
         return $itemCategories;


    }
}
