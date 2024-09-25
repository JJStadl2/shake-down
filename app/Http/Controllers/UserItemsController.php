<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GearListItems;
use App\Models\GearLists;
use App\Models\UserItems;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use stdClass;


class UserItemsController extends Controller
{

    public function addUserItems(Request $request){

        $inputs = $request->input();
        $user = Auth::user();
        GearListItems::createNewMasterItems($inputs, $user);
        return redirect()->back();
    }

    public function assignUserItem(Request $request){

        $userItemId = $request->assignItemId ?? false;

        if(empty($userItemId)){
            return redirect()->back()->with('error','No item provided.');
        }

        $response =  UserItems::manageListAssigments($request);

        if($response['status'] !== 1){
            return redirect()->back()->with('warning',$response['msg']);
        }

        return redirect()->back()->with('success',$response['msg']);

    }
}
