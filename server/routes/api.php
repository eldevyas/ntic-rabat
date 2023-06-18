<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\CommentsController;
use App\Http\Middleware\CheckResetPasswordToken;

// Import CheckResetPasswordToken middleware

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
Route::middleware('auth:api')->group(function () {
    Route::post('/annonces', [AnnonceController::class, 'store']);
    Route::delete('/annonces/{id}', [AnnonceController::class, 'delete']);
    Route::put('/annonces/{id}', [AnnonceController::class, 'update']);
});

Route::post('/login', [UserController::class, 'login']);

// Get all users
Route::get('/users', [UserController::class, 'getUsers']);

Route::post('/register', [UserController::class, 'register']);

// Login with token
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:api');

// Route to check username availability
Route::get('/users/check-username/{username}', [UserController::class, 'checkUsername']);

// Route to check email availability
Route::get('/users/check-email/{email}', [UserController::class, 'checkEmail']);

// Forget password route for sending email
Route::post('/auth/forget-password', [UserController::class, 'forgetPassword']);

// Reset password route
Route::post('/reset-password', [UserController::class, 'resetPasswordByToken']);

// Route for email verification
Route::post('/auth/verify-email', [UserController::class, 'verifyEmailCode']);

// Check if email is verified
Route::post('/auth/check-email-verified', [UserController::class, 'checkEmailVerified']);

// Resend email verification code
Route::post('auth/resend-confirmation', [UserController::class, 'sendEmailVerification']);

// View user profile
Route::get('/user/{username}', [UserController::class, 'show']);

// Update user profile
Route::middleware('auth:api')->group(function () {
    Route::post('/user/update-profile', [UserController::class, 'UpdateProfile']);
    Route::post('/user/update-password', [UserController::class, 'UpdatePassword']);
});

// Likes and comments routes
Route::post('/posts/{post}/like', [LikesController::class, 'like'])->middleware('auth:api');
Route::post('/posts/{post}/comment', [CommentsController::class, 'store'])->middleware('auth:api');


Route::prefix('posts')->group(function () {
    Route::get('/', [PostsController::class, 'index']);
    Route::get('/team', [PostsController::class, 'TeamPosts']);
    Route::post('/', [PostsController::class, 'store'])->middleware('auth:api');
    Route::get('/{post}', [PostsController::class, 'show']);
    Route::delete('/{post}', [PostsController::class, 'destroy']);
    Route::put('/{post}', [PostsController::class, 'update']);
});
Route::post('/upload-image', [PostsController::class, 'uploadImage']);


// Socials
Route::middleware('auth:api')->group(function () {
    Route::post('/socials', [SocialController::class, 'store']);
    Route::put('/socials/', [SocialController::class, 'update']);
    Route::delete('/socials/{id}', [SocialController::class, 'destroy']);
});
