<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


//view routs
Route::get('/', function () {
    return view('welcome');

});
Route::get('/dashboard', function () {
    if(Auth::check()){
        return  view('dashboard');
    }else{
        return redirect('/login');
    }

});
Route::get('/about', function () {
    return view('about');

});
Route::get('/faqs', function () {
    return view('faqs');

});
Route::get('/how-to', function () {
    return view('how-to');

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
Route::post('/edit-gear-list', [App\Http\Controllers\GearListsController::class, 'edit']
)->name('list-edit');
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
Route::post('/add-user-gear-to-list/{listId}', [App\Http\Controllers\GearListsController::class, 'assignUserItemsToList']
)->name('assign-item-to-list');

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
Route::get('/list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'show']
)->name('item-show');
Route::get('/list-item', [App\Http\Controllers\GearListItemsController::class, 'create']
)->name('item-create');
Route::post('/list-item', [App\Http\Controllers\GearListItemsController::class, 'store']
)->name('item-store');
Route::get('/destroy-list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'destroy']
)->name('item-destroy');
Route::get('/remove-list-item/{id}', [App\Http\Controllers\GearListItemsController::class, 'remove']
)->name('item-remove');
Route::post('/update-item-uom', [App\Http\Controllers\GearListItemsController::class, 'updateGearItemUOM']
)->name('item-update-uom');
Route::get('/get-user-items/{listId}', [App\Http\Controllers\GearListItemsController::class, 'getUserItemsToAssign']
)->name('get-assign-item');//"/add-user-gear-to-list/{{ $gearList->id }}"


//master list and item routes
Route::post('/add-gear-items',  [App\Http\Controllers\GearListItemsController::class, 'addMasterGearItems']
)->name('add-master-items');
Route::post('/assign-to-gear-list',  [App\Http\Controllers\GearListsController::class, 'assignMasterItem']
)->name('assign-master-items');

//gear item API search
Route::get('/search-api', [App\Http\Controllers\GearSearchController::class, 'search'])->name('gear-api-search');

//js helpers
Route::get('/list-item-categories', [App\Http\Controllers\GearListItemsController::class, 'getCategories']
)->name('get-categories');
Route::get('/get-user-lists/{masterItemId}', [App\Http\Controllers\GearListsController::class, 'getUserLists']
)->name('get-user-lists');
Route::get('/get-pack-data/{list_Id}', [App\Http\Controllers\GearListsController::class, 'getPackData']
)->name('get-pack-data');

