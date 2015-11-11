<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('/admin', [
    'as' => 'admin',
    'middleware' => 'auth',
    'uses' => 'Admin\DashboardController@index',
]);

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

Route::group([
    'middleware' => 'auth',
    'prefix' => 'admin',
    'namespace' => 'Admin',
], function () {
    Route::resource('areas', 'AreasController');
    Route::resource('users', 'UsersController');
    Route::resource('roles', 'RolesController');
    Route::resource('customers', 'CustomersController');
    Route::resource('employees', 'EmployeesController');
    Route::resource('projects', 'ProjectsController');

    Route::get('/minutes/{id}', [
        'as' => 'admin.minutes.index',
        'uses' => 'MinutesController@index',
    ]);
    Route::get('/minutes/create/{id}', [
        'as' => 'admin.minutes.create',
        'uses' => 'MinutesController@create',
    ]);
    Route::resource('minutes', 'MinutesController', ['except' => ['index', 'create']]);

    Route::delete('/employees/deleteEmail/{id}', [
        'as' => 'admin.employee.delete_email',
        'uses' => 'EmployeesController@deleteEmail',
    ]);
    Route::post('/employees/addEmail', [
        'as' => 'admin.employee.add_email',
        'uses' => 'EmployeesController@addEmail',
    ]);
    Route::delete('/employees/deletePhone/{id}', [
        'as' => 'admin.employee.delete_phone',
        'uses' => 'EmployeesController@deletePhone',
    ]);
    Route::post('/employees/addPhone', [
        'as' => 'admin.employee.add_phone',
        'uses' => 'EmployeesController@addPhone',
    ]);
    Route::post('/selectCustomer/{id}', [
        'as' => 'admin.dashboard.sel_customer',
        'uses' => 'DashboardController@selectCustomer',
    ]);
    Route::post('/employees/add', [
        'as' => 'admin.employee.add',
        'uses' => 'EmployeesController@add',
    ]);
});
