<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function showLoginForm(){
        return view('auth.login');
    }

    public function login(Request $request){
        Log::debug(__FILE__.' '.__LINE__.' in login controller');
        return redirect()->back()->with('error','failed to login.');
    }
}
