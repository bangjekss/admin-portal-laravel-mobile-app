<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use HasFactory;
    public function sale(){
        return $this->hasMany(Sales::class, 'customerId');
    }
    public function history(){
        return $this->hasMany(Sales::class, 'customerId');
    }
    // public function history(){
    //     return $this->hasMany()
    // }
}