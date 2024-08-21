<?php

use Illuminate\Support\Facades\Route;


Route::get('/dashboard', function () {
     return view('auth.login');

});
//auth routes
Route::get('/login', [App\Http\Controllers\AuthController::class, 'showLoginForm']
)->name('showLoginForm');
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']
)->middleware('auth')->name('login');
//registration routes
Route::get('/register',[App\Http\Controllers\AccountController::class, 'showRegistration']
)->name('showRegistration');
Route::post('/register',[App\Http\Controllers\AccountController::class, 'register']
)->name('register');
