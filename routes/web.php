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
)->name('list-index');
Route::get('/gear-list/{id}', [App\Http\Controllers\GearListsController::class, 'show']
)->name('list-show');
Route::post('/gear-list/{id}', [App\Http\Controllers\GearListsController::class, 'update']
)->name('list-update');
Route::get('/gear-list', [App\Http\Controllers\GearListsController::class, 'create']
)->name('list-create');
Route::post('/gear-list', [App\Http\Controllers\GearListsController::class, 'store']
)->name('list-store');

//gear list item routes
Route::get('/list-items/{listId}', [App\Http\Controllers\GearListItemsController::class, 'index']
)->name('item-index');
// Route::get('/gear-list/{id}', [App\Http\Controllers\GearListsController::class, 'show']
// )->name('show');
Route::post('/list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'update']
)->name('item-update');
Route::get('/list-item', [App\Http\Controllers\GearListItemsController::class, 'create']
)->name('item-create');
Route::post('/list-item', [App\Http\Controllers\GearListItemsController::class, 'store']
)->name('item-store');

//about/housekeeping
Route::get('/about', [App\Http\Controllers\GearListsController::class, 'index']
)->name('about');
Route::get('/gallery', [App\Http\Controllers\GearListsController::class, 'index']
)->name('gallery');
