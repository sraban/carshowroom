<?php

namespace App;
use Vehicles;
use Illuminate\Database\Eloquent\Model;

class Manufacturers extends Model
{
    protected $fillable = ['name'];
    //public $timestamps = false;
    public function vehicles()
    {
        return $this->hasMany(Vehicles::class);
    }
}
