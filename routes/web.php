<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
     return view('welcome');

});
Route::get('/register',[App\Http\Controllers\AccountController::class, 'showRegistration']
)->name('showRegistration');
Route::post('/register',[App\Http\Controllers\AccountController::class, 'register']
)->name('register');
