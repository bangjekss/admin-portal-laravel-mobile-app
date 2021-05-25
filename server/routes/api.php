<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\CustomersController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductsController::class, 'getProducts']);
Route::post('/products', [ProductsController::class, 'addProduct']);
Route::post('/products/edit/{productId}', [ProductsController::class, 'editProduct']);
Route::get('/products/categories', [ProductsController::class, 'getCategories']);
Route::delete('/products/{productId}', [ProductsController::class, 'deleteProduct']);
Route::post('/products/upload', [ProductsController::class, 'upload']);
Route::get('/sales', [SalesController::class, 'getSales']);
Route::post('/sales/{customerId}', [SalesController::class, 'postSale']);
Route::get('/customers', [CustomersController::class, 'getCustomers']);
