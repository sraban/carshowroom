<?php

namespace App;
use Manufacturers;
use Images;
use Illuminate\Database\Eloquent\Model;

class Vehicles extends Model
{
    //public $timestamps = false;
    protected $fillable = ['name','color','reg_no','note','date_manufactured','manufacture_id'];
    
    public function manufacture()
    {
        return $this->belongsTo(Manufacturers::class);
    }

    public function images()
    {
        return $this->hasMany(Images::class);
    }
}