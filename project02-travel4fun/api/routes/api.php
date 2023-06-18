<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AmenityController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/hotel', HotelController::class);

    Route::get('/room/list/{id}', [RoomController::class, 'index']);
    Route::post('/room', [RoomController::class, 'store']);
    Route::get('/room/{id}', [RoomController::class, 'show']);
    Route::patch('/room/{id}', [RoomController::class, 'update']);
    Route::delete('/room/{id}', [RoomController::class, 'destroy']);

    Route::post('/logout', [LoginController::class, 'logout']);

    Route::get('/user/profile', [UserController::class, 'show']);
    Route::patch('/user/profile', [UserController::class, 'update']);
    Route::patch('/user/password', [UserController::class, 'updatePassword']);
    Route::delete('/user/delete', [UserController::class, 'destroy']);
});

Route::get('/user', [UserController::class, 'index']);
Route::post('/user', [UserController::class, 'store']);
Route::post('/login', [LoginController::class, 'login']);

Route::resource('/category', CategoryController::class);
Route::resource('/amenity', AmenityController::class);

