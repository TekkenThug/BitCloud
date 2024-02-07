<?php

use App\Http\Controllers\VerifyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubscriberController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/test-mail/{template?}', function ($template = null) {
    $viewName = "mails.$template";

    if (!view()->exists($viewName) || !$template) {
        abort(404);
    }

    return view("mails.$template");
})->where('any', '.*')->middleware("dev-env");

Route::get('/unsubscribe/{email}', [SubscriberController::class, 'unsubscribe'])->name('unsubscribe')->middleware('signed');

Route::get('/email/verify/{id}/{hash}', [VerifyController::class, 'verify'])->name('verification.verify');

Route::get('{any}', function () {
    return view('index');
})->where('any', '.*');
