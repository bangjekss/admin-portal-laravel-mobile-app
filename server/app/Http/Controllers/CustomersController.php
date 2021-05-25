<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customers;

class CustomersController extends Controller
{
    function getCustomers(){
        $customers = Customers::orderBy('createdAt', 'desc')->get();
        $customers = $customers->load('history');
        return response($customers->toArray());
    }
}
