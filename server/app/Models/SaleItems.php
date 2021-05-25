<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleItems extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function product(){
        return $this->belongsTo(Products::class, 'productId');
    }
    public function sale(){
        return $this->belongsTo(Sales::class, 'saleId');
    }
}
