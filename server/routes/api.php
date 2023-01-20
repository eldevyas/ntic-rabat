<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Resources\AnnonceCollection;
use App\Http\Controllers\Api\AnnonceController;
use App\Http\Controllers\Api\ProjectController;

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
// Make middleware for store route in annonces api resource
Route::post('/annonces', [AnnonceController::class, 'store'])->middleware('auth:api');
Route::delete('/annonces/{id}', [AnnonceController::class, 'delete'])->middleware('auth:api');
Route::put('/annonces/{id}', [AnnonceController::class, 'update'])->middleware('auth:api');
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:api');
Route::apiResource('projects', ProjectController::class);
