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
        Log::debug(__FILE__.' '.__LINE__.' lists: '.print_r($gearLists,true));
        if($gearLists->isEmpty()){
            return redirect('/gear-list')->with('info','Please create a gear list.');
        }
        Log::debug(__FILE__.' '.__LINE__.' user id: '.print_r($user,true));
        return redirect()->back()->with('success','User Found');
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
        //
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
