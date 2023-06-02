<?php

use Illuminate\Support\Facades\Route;
use Intervention\Image\Facades\Image;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Email Template viewer
Route::get('/email/{template}', function ($template) {
    return view('mail.' . $template);
});

Route::get('/avatar', function () {
    // Create a new image with a size of 400x400 pixels
    $image = imagecreatetruecolor(400, 400);

    // Generate random colors for the mesh gradient
    $color1 = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
    $color2 = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));

    // Fill the image with the mesh gradient
    imagefilledrectangle($image, 0, 0, 400, 400, $color1);

    // Draw mesh lines with the second color
    for ($i = 0; $i < 400; $i += 20) {
        imageline($image, 0, $i, 400, $i, $color2);
        imageline($image, $i, 0, $i, 400, $color2);
    }

    // Output the image as a base64-encoded string
    ob_start();
    imagepng($image);
    $imageData = ob_get_clean();
    $base64Image = base64_encode($imageData);

    // Create a response with the base64-encoded image content
    $response = Response::make(base64_decode($base64Image));
    $response->header('Content-Type', 'image/png');
    $response->header('Content-Disposition', 'inline; filename=avatar.png');

    // Clean up resources
    imagedestroy($image);

    return $response;
});