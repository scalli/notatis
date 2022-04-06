<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AngularController;

use App\Http\Controllers\AuthController;
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

//Route::any('/{any}', [AngularController::class,'index.html']);

// Route::get('/', function() {
// 	View::addExtension('html','php'); 
// 	return View::make('index');
// });

//Added to try login with cookie sanctum spa
 // Route::group(['domain' => '{subdomain}.'.env('APP_DOMAIN'), 'middleware' => 'schoolplatform'], function () {
	// Route::post('/login', [AuthController::class, 'login']);
 // });

Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    return "Cache is cleared";
});