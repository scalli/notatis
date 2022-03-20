<?php

use App\Http\Controllers\Class1\Class1Controller;
use App\Http\Controllers\Class1\Class1RemarkController;
use App\Http\Controllers\Remark\RemarkController;
use App\Http\Controllers\RemarkOption\RemarkOptionController;
use App\Http\Controllers\Schoolyear\SchoolyearController;
use App\Http\Controllers\School\SchoolController;
use App\Http\Controllers\Severity\SeverityController;
use App\Http\Controllers\Student\StudentController;
use App\Http\Controllers\Student\StudentRemarkController;
use App\Http\Controllers\Teacher\TeacherController;
use App\Http\Controllers\Teacher\TeacherRemarkController;
use App\Http\Controllers\User\UserController;


use App\Http\Controllers\AuthController;

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
//Route::get('/users', [UserController::class, 'index']);

// Route::domain('{subdomain}.'.env('APP_DOMAIN'))->middleware('schoolplatform:'.subdomain)->group(function () {
 //Route::group(['domain' => '{subdomain}.'.env('APP_DOMAIN'), 'middleware' => 'schoolplatform'], function () {
	Route::resource('class1s', Class1Controller::class);
	Route::resource('class1s.remarks', Class1RemarkController::class, ['only' => ['index']]);
	Route::resource('remarks', RemarkController::class)->middleware('auth:sanctum');
	Route::resource('remarkoptions', RemarkOptionController::class);
	Route::resource('schoolyears', SchoolyearController::class);
	Route::resource('schools', SchoolController::class);
	Route::resource('students', StudentController::class);
	Route::resource('students.remarks', StudentRemarkController::class, ['only' => ['index']]);
	Route::resource('teachers', TeacherController::class);
	Route::resource('teachers.remarks', TeacherRemarkController::class, ['only' => ['index']]);
	Route::resource('users', UserController::class);
	Route::resource('severities', SeverityController::class);
	Route::get('/detailedStudent/{id}',[StudentController::class, 'showCompleteStudent']);
	Route::get('/filteredRemarks/',[RemarkController::class, 'showFilteredRemarks']);
	Route::get('/getSchoolInfoByExternalCode/{smartschoolplatform}',[SchoolController::class, 'getSchoolInfoByExternalCode']);

	Route::name('verify')->get('/users/verify/{token}', [UserController::class,'verify']);

	//Authentication routes with Laravel Sanctum
	Route::post('/registerstudent', [AuthController::class, 'registerstudent']);
	Route::post('/registerteacher', [AuthController::class, 'registerteacher']);
	Route::post('/login', [AuthController::class, 'login']);
	Route::post('/logout', [AuthController::class, 'logout']);
	Route::post('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
// });