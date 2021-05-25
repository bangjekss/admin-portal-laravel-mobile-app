<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;
    protected $keyType = 'string';
    public $incrementing = false;
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';
    public function customer(){
        return $this->belongsTo(Customers::class, 'customerId');
    }
    public function saleItem(){
         return $this->hasMany(SaleItems::class, 'saleId');
    }
    public function product(){
         return $this->belongsToMany(Products::class, 'sale_items', 'saleId', 'productId');
    }
}