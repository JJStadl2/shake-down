<?php

namespace App\Http\Controllers;

use App\Models\GearLists;
use App\Models\GearListItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

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

        try{
            $gearList->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to save list at this time.')->withInput();
        }

        $gearListItems = [];
        $listSortingOptions = GearLists::getSortingOptions();
        $listClasses = GearLists::getListClasses();

        return view('gear-lists.gear-list',['gearList'=>$gearList,'listItems'=>$gearListItems,'user'=>$user, 'listClasses'=>$listClasses,'sortingOptions'=> $listSortingOptions ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(GearLists $gearLists)
    {
        //
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
        $inputs = $request->input();

        try{
            $gearList = GearLists::where('id',$id)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return response()->json(['status'=>'0','msg'=>'Error fetching list data']);
        }

        if(!count($gearList)){
            return response()->json(['status'=>'0','msg'=>'Error. No list found.']);;
        }

        foreach($inputs as $key => $value){
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

        try{
            $gearListItems->delete();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','List deleted but failed to delte items.');
        }

        return redirect()->back()->with('success','List and items deleted.');

    }
}
