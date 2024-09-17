<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', function () {
    return view('welcome');

});
//view routs
Route::get('/dashboard', function () {
    if(Auth::check()){
        return  view('dashboard');
    }else{
        return redirect('/login');
    }
    //  return view('dashboard');

});

//auth routes
Route::get('/login', [App\Http\Controllers\AuthController::class, 'showLoginForm']
)->name('showLoginForm');
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']
)->middleware('auth')->name('login');
Route::get('/logout', [App\Http\Controllers\AuthController::class, 'logout']
)->name('logout');

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
Route::get('/destroy-list/{id}', [App\Http\Controllers\GearListsController::class, 'destroy']
)->name('list-destroy');
Route::get('/gear-list-analytics/{id}', [App\Http\Controllers\GearListsController::class, 'getListChartData']
)->name('list-analytics');
Route::get('/remove-category/{id}/{category}', [App\Http\Controllers\GearListsController::class, 'removeCategory']
)->name('list-remove-category');

//gear list item routes
Route::get('/all-list-items', [App\Http\Controllers\GearListItemsController::class, 'itemsMaster']
)->name('item-master');
Route::get('/list-items/{listId}', [App\Http\Controllers\GearListItemsController::class, 'index']
)->name('item-index');
// Route::get('/gear-list/{id}', [App\Http\Controllers\GearListsController::class, 'show']
// )->name('show');
Route::post('/update-list-order',  [App\Http\Controllers\GearListItemsController::class, 'sortGearItems']
)->name('item-sort');
Route::post('/update-caterogry-order',  [App\Http\Controllers\GearListItemsController::class, 'sortGearListCategories']
)->name('category-sort');

//item routes
Route::post('/list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'update']
)->name('item-update');
Route::post('/list-items/{listId}', [App\Http\Controllers\GearListItemsController::class, 'updateByCategory']
)->name('item-update-by-category');
Route::get('/list-item', [App\Http\Controllers\GearListItemsController::class, 'create']
)->name('item-create');
Route::post('/list-item', [App\Http\Controllers\GearListItemsController::class, 'store']
)->name('item-store');
Route::get('/destroy-list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'destroy']
)->name('item-destroy');
Route::get('/remove-list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'remove']
)->name('item-remove');
Route::post('/add-gear-items',  [App\Http\Controllers\GearListItemsController::class, 'addMasterGearItems']
)->name('add-master-items');
Route::post('/assign-to-gear-list',  [App\Http\Controllers\GearListItemsController::class, 'assignMasterItem']
)->name('assign-master-items');

//gear item API search
Route::get('/search-api', [App\Http\Controllers\GearSearchController::class, 'search'])->name('gear-api-search');

//js helpers
Route::get('/list-item-categories', [App\Http\Controllers\GearListItemsController::class, 'getCategories']
)->name('get-categories');
Route::post('/update-session', [App\Http\Controllers\GearListsController::class, 'updateSession']
)->name('update-session');

//about/housekeeping
Route::get('/about', [App\Http\Controllers\GearListsController::class, 'index']
)->name('about');
Route::get('/gallery', [App\Http\Controllers\GearListsController::class, 'index']
)->name('gallery');
