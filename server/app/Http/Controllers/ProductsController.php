<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    function getProducts(){
        $products = Products::orderBy('createdAt', 'desc')->get();
        $products = $products->load('category');
        return response($products->toArray());
    }

    function addProduct(Request $req){
        header("Content-Type: application/json");
        header("Acess-Control-Allow-Origin: *");
        header("Acess-Control-Allow-Methods: POST");
        header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods, Authorization");
        // $file = $req->image;
        // $pat = $req->image->path();
        // $name =$req->image->getClientOriginalName();
        // $isValid =$req->image->isValid();
        // $getError =$req->image->getError();
        // $response = array(['file' => $file,'ext' => $ext,'path' => $pat, 'name' => $name, 'isValid' => $isValid, 'error' => $getError  ]);
        // echo 'ea';
    // return 'ea';

        $ext = $req->image->getClientOriginalExtension();
        $prefix = 'PRD';
        $dateNow = time();
        $filename = $prefix.$dateNow.'.'.$ext;

        $req->image->storeAs('./public/products', $filename);
        $products = new Products;
        $products->productName = $req->productName;
        $products->price = $req->price;
        $products->categoryId = $req->categoryId;
        $products->stock = $req->stock;
        $products->description = $req->description;
        $products->imagepath = $filename;
        $products->save();
        return $products;
    }

    function editProduct(Request $req, $productId){
        header("Content-Type: application/json");
        header("Acess-Control-Allow-Origin: *");
        header("Acess-Control-Allow-Methods: POST");
        header("Acess-Control-Allow-Methods: PATCH");
        header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods, Authorization");

        $product = Products::find($productId);
        $oldImagepath = $product->imagepath;
        $image = $req->image;
        $note = $req->noFile;
        // return $image;
        $product->productName = $req->productName;
        $product->price = $req->price;
        $product->stock = $req->stock;
        $product->description = $req->description;

        if($note === FALSE){
            $ext = $req->image->getClientOriginalExtension();
            $prefix = 'PRD';
            $dateNow = time();
            $filename = $prefix.$dateNow.'.'.$ext;
            $req->image->storeAs('./public/products', $filename);
            $product->imagepath = $filename;
            Storage::delete('./public/products/'.$oldImagepath);
        }else{
            $product->imagepath = $oldImagepath;
        }
        $product->save();
        return response($product->toArray());

        // return $req->image;
    }

    function getCategories(){
        $categories = [(['id' => 0, 'nama' => 'pilih kategori'])];
        $getCategories = Categories::all();
        foreach ($getCategories as $value){
            array_push($categories, (['id' => $value->id, 'nama' => $value->category]));
        }
        return $categories;
    }

    function deleteProduct($productId){
        $product= Products::find($productId);
        $oldImagepath = $product->imagepath;
        $product->delete();
        Storage::delete('./public/products/'.$oldImagepath);
        return 'success delete';
    }
}
