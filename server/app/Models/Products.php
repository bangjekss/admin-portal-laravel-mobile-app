<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    // public $timestamps = false;
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';
    // protected $table = 'custome_name_table';
    // protected $primaryKey = 'productId';

    // default value on attributes or column
    // protected $attributes = [
    //     'name' => 'acong',
    // ];
    public function category(){
        return $this->belongsTo(Categories::class, 'categoryId');
    }
    public function saleItems(){
        return $this->hasOne(SaleItems::class, 'productId');
    }
}