<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\PostsController;
use App\Http\Resources\AnnonceCollection;
use App\Http\Controllers\CommentsController;
// import CheckResetPasswordToken middleware
use App\Http\Controllers\Api\AnnonceController;
use App\Http\Middleware\CheckResetPasswordToken;
// import AdminCheck middleware
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

// login with token
Route::post('/register', [UserController::class, 'register']);

Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:api');

Route::apiResource('projects', ProjectController::class);

// Route to check username availability
Route::get('/users/check-username/{username}', [UserController::class, 'checkUsername']);

// Route to check email availability
Route::get('/users/check-email/{email}', [UserController::class, 'checkEmail']);

// Forget password route for sending email
Route::post('/auth/forget-password', [UserController::class, 'forgetPassword']);

// Reset password route
Route::post('/reset-password', [UserController::class, 'resetPasswordByToken'])->middleware('CheckResetPasswordToken');

// Route for email verification
Route::post('/auth/verify-email', [UserController::class, 'verifyEmailCode']);

// Check if email is verified
Route::post('/auth/check-email-verified', [UserController::class, 'checkEmailVerified']);

// Resend email verification code
Route::post('auth/resend-confirmation', [UserController::class, 'sendEmailVerification']);

// View user profile
Route::get('/user/{username}', [UserController::class, 'show']);

// Update password
Route::post('/user/update-password', [UserController::class, 'UpdatePassword'])->middleware('auth:api');

// Posts group routes
Route::group(['prefix' => 'post'], function () {
    Route::get('/', [PostsController::class, 'index']);
    Route::get('/{post}', [PostsController::class, 'show']);
    Route::post('/', [PostsController::class, 'store'])->middleware('auth:api');
    Route::put('/{post}', [PostsController::class, 'update'])->middleware('auth:api');
    Route::delete('/{post}', [PostsController::class, 'destroy'])->middleware('auth:api');
});

// Group like routes
Route::group(['prefix' => 'post'], function () {
    Route::post('/{post}/like', [LikesController::class, 'like'])->middleware('auth:api');
});

// Group comment routes
Route::group(['prefix' => 'post'], function () {
    Route::post('/{post}/comment', [CommentsController::class, 'store'])->middleware('auth:api');
    Route::delete('/{post}/comment/{comment}', [CommentsController::class, 'destroy'])->middleware('auth:api');
});
