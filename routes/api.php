<?php

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


Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('deneme', 'ChatsController@deneme');

Route::group(['prefix' => 'auth'], function () {

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('messages', 'ChatsController@fetchMessages');
        Route::post('messages', 'ChatsController@sendMessage');

        Route::get('user-list', 'USerController@getUser');
        
        Route::delete('cikis', 'UserController@cikis');
        
    });
});
