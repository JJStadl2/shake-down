<?php

namespace App\Http\Controllers;

use App\Models\GearListItems;
use App\Models\GearLists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class GearListItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($listId)
    {
        $user = Auth::user();
        try{
            $gearList = GearLists::where('id',$listId)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to find list info.');
        }
        try{
            $gearListItems = GearListItems::where('list-id',$listId)->orderBy('id')->get();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            $gearListItems = [];
        }

        if($gearListItems->isEmpty()){
            $gearListItems = [];
        }

        return view('gear-lists.gear-list',['gearList'=>$gearList,'listItems'=>$gearListItems,'user'=>$user]);
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
        Log::debug(__FILE__.' '.__LINE__.' request for create item: '.print_r($request->input(),true));
        $gearListItem = new GearListItems();
        $gearListItem->$request->columnName = $request->value;
        try{
            $gearListItem->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error Saving list item']);;
        }

        $response = ['status'=>'1','newId'=>$gearListItem->id];
        return response()->json($response);
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
    public function update(Request $request, GearListItems $gearListItems)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GearListItems $gearListItems)
    {
        //
    }
}
