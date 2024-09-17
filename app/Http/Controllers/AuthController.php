<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function showLoginForm(){

        if(Auth::check()){
            return redirect()->intended('dashboard');
        }


        return view('auth.login');
    }

    public function login(Request $request){
        return redirect('/dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        Session::forget('masterItemOptions');

        return redirect(route('showLoginForm'));
    }
}
