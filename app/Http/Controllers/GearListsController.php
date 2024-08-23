<?php

namespace App\Http\Controllers;

use App\Models\GearLists;
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

        if($gearLists->isEmpty()){
            return redirect('/gear-list')->with('info','Please create a gear list.');
        }

        return view('gear-lists.user-list-index',['gearLists'=>$gearLists,'user'=>$user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
      return view('gear-lists.create');
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
        $gearList->sort = $request->sortBy ?? 'category';

        try{
            $gearList->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to save list at this time.')->withInput();
        }

        $gearListItems = [];
        return view('gear-lists.gear-list',['gearList'=>$gearList,'listItems'=>$gearListItems,'user'=>$user]);
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
    public function update(Request $request, GearLists $gearLists)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GearLists $gearLists)
    {
        //
    }
}
