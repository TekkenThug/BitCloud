<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('currencies', [CurrencyController::class, 'get']);
    Route::resource('articles', ArticleController::class);

    Route::prefix('users')->group(function () {
        Route::get('me', [UserController::class, 'me']);
    });
});

Route::post('subscribers', [SubscriberController::class, 'post']);
Route::delete('subscribers', [SubscriberController::class, 'destroy']);

Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);
