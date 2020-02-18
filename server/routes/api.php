<?php

use Illuminate\Http\Request;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('manufacturers',[
    'as' => 'get_manufacturer',
    'uses' => 'ManufacturersController@index'
]);


Route::post('manufacturers/save',[
    'as' => 'save_manufacturer',
    'uses' => 'ManufacturersController@store'
]);


Route::post('manufacturers/delete',[
    'as' => 'delete_manufacturer',
    'uses' => 'ManufacturersController@destroy'
]);


// ============================


Route::get('vehicles',[
    'as' => 'get_vehicles',
    'uses' => 'VehiclesController@index'
]);


Route::get('reports',[
    'as' => 'get_vehicles',
    'uses' => 'VehiclesController@reports'
]);


Route::post('vehicles/save',[
    'as' => 'save_vehicles',
    'uses' => 'VehiclesController@store'
]);


Route::post('vehicles/delete',[
    'as' => 'delete_vehicles',
    'uses' => 'VehiclesController@destroy'
]);

Route::post('vehicles/upload',[
    'as' => 'upload_vehicles',
    'uses' => 'VehiclesController@upload'
]);

Route::post('manufacturers/vehicles/sold',[
    'as' => 'sold_vehicles',
    'uses' => 'VehiclesController@sold'
]);


