<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use App\Models\Validation;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\GearLists;
use App\Mail\AccountVerification;
use Illuminate\Support\Facades\Mail;

class AccountController extends Controller
{
    public function showRegistration(){
        return view('account.registration-form');
    }

    public function register(Request $request){

        //confirm the passwords match
        if(!Validation::validateRegistration($request)){
            return redirect()->back()->with('error','The passwords you entered do not match.')->withInput();
        }

        //check if the user aleady has an account
        $user = User::where('email',strtolower($request->inputEmail))->first();

        if(!empty($user)){
            return redirect()->back()->with('error','An account already exists for '.$request->inputEmail.'.')->withInput();;
        }

        $newUser = new User();
        $newUser->name = $request->inputName;
        $newUser->email = strtolower($request->inputEmail);
        $newUser->password = Hash::make($request->inputPassword);

        try{
            $newUser->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to save user at this time.')->withInput();
        }

        Auth::loginUsingId($newUser->id);

        $gearList = new GearLists();
        $gearList->user_id = $newUser->id;
        $gearList->name = $newUser->name.' | MASTER GEAR LIST';
        $gearList->notes = '';
        $gearList->sort = 'cat_asc';
        $gearList->uom = 'us';
        $gearList->list_class = 'hvy';
        $gearList->list_items = true;
        $gearList->master_list = true;

        try{
            $gearList->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Unable to save list at this time.')->withInput();
        }
        try{
            $newUser->master_list_id = $gearList->id;
            $newUser->save();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return redirect()->back()->with('error','Failed to assign master gear list to user.')->withInput();
        }


        $gearList->weightUom = ($gearList->uom === 'us') ? 'LBS' : 'KG';

        return redirect('/login')->with('success','Your account has been created. Please login.');
    }
}
