<?php

namespace App;
use Vehicles;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    //
    //public $timestamps = false;
    protected $fillable = ['path','vehicle_id'];
    
    public function vehicles()
    {
        return $this->belongsTo(Vehicles::class);
    }
}