<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth as PackAuth;
class Auth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $credentials = $request->only('email', 'password');
        if (PackAuth::attempt($credentials)) {
            Log::debug(__FILE__.' '.__LINE__);
            // Authentication passed...
            return redirect()->intended('dashboard');
        }

        return back()->with([
            'error' => 'The provided credentials do not match our records.',
        ]);
        return $next($request);
    }
}


