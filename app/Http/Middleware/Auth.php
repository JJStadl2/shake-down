<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class Auth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = User::where('email',strtolower($request->email))->first();
        if(empty($user)){
            return redirect()->back()->with('error','Invalid email address. User account does not exist. Please register.');
        }
        if(!Hash::check($request->password, $user->password)){
            return redirect()->back()->with('error','Invaild password.');
        }
        return $next($request);
    }
}


