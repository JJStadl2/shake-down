<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use App\Models\Validation;
use App\Models\User;
class AccountController extends Controller
{
    public function showRegistration(){
        return view('account.registration-form');
    }

    public function register(Request $request){
        Log::debug(__FILE__.' '.__LINE__.' request: '.print_r($request->input(),true));

        //confirm the passwords match
        if(!Validation::validateRegistration($request)){

            return redirect()->back()->with('error','The passwords you entered do not match.');
        }

        //check if the user aleady has an account
        $user = User::where('email',$request->inputEmail)->first();

        if(!empty($user)){
            return redirect()->back()->with('error','An account already exists for '.$request->inputEmail.'.');
        }

        $newUser = new User();
        $newUser->name = $request->inputName;
        $newUser->email = strtolower($request->inputEmail);
        $newUser->password = Hash::make($request->inputPassword);
        $newUser->save();

        return redirect()->back()->with('success','The user has been created.');
    }
}
