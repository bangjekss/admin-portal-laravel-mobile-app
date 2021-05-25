<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\SaleItems;
use Illuminate\Support\Facades\DB;

class SalesController extends Controller
{
    function getSales(){
        $sales = Sales::orderBy('createdAt', 'desc')->get();
        $sales = $sales->load('customer', 'saleItem', 'product');
        return ($sales->toArray());
    }
    function postSale($customerId, Request $req){
        // print_r($userId);
        // cart, productId, subTotal
        // transaction => subTotal userId
        // transacion_item => quantity productId
        // date_default_timezone_set('Asia/Jakarta');


        list('subTotal' => $subTotal, 'cart' => $cart, 'dateNow' => $dateNow) = $req; /// desturcturing
        // $date = date("Y-m-d H:i:s");
        $inv = 'INV/'.$dateNow;
        // $response = array('userId' => $userId, 'data' => $req->subTotal);
        $sales = new Sales;
        $sales->id = $inv;
        $sales->subTotal = $subTotal;
        $sales->customerId = $customerId;
        $sales->save();
        // return response();
        foreach($cart as $value){
            $saleItems = new SaleItems;
            $saleItems->saleId = $inv;
            $saleItems->quantity = $value['quantity'];
            $saleItems->productId = $value['id'];
            $saleItems->save();
        }
        // print_r($req);
        // echo 'eaea';
        return response()->json((['status' => 'success']));
    }
}