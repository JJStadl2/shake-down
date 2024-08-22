<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');

});
//view routs
Route::get('/dashboard', function () {
     return view('dashboard');

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

//gear list routes
Route::get('/gear-lists', [App\Http\Controllers\GearListsController::class, 'index']
)->name('index');
Route::get('/gear-list/{id}', [App\Http\Controllers\GearListsController::class, 'show']
)->name('show');
Route::post('/gear-list/{id}', [App\Http\Controllers\GearListsController::class, 'update']
)->name('update');
Route::post('/gear-list', [App\Http\Controllers\GearListsController::class, 'create']
)->name('create');

//about/housekeeping
Route::get('/about', [App\Http\Controllers\GearListsController::class, 'index']
)->name('index');
