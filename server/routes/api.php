<?php

use App\Http\Controllers\Api\AnnonceController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Resources\AnnonceCollection;
use App\Models\Annonce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('annonces', AnnonceController::class);
Route::post('annonces', [AnnonceController::class, 'store'])->middleware('auth:api');
Route::post('login', [RegisterController::class, 'login']);
Route::post('logout', [RegisterController::class, 'logout'])->middleware('auth:api');
Route::post('register', [RegisterController::class, 'register']);
