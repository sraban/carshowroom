<?php

namespace App\Http\Controllers;

use App\Vehicles;
use App\Images;
use App\Manufacturers;
use Validator;
use DB;
use Illuminate\Http\Request;

class VehiclesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehicles = Vehicles::orderBy('id','DESC')->get();
        foreach($vehicles as $vehicle) {
            $img = Images::where('vehicle_id', $vehicle->id);
            if( $img->count() ) $vehicle->paths = $img->select('path')->get(); else $vehicle->paths = '';
            $vehicle->manufacture = Manufacturers::find($vehicle->manufacture_id)->name;
        }
        return response()->json(['status' => true, "description"=>"List of Records", "response" => $vehicles ], 200);
    }


    public function reports()
    {
        $vehicles = Vehicles::select('id', 'name', 'manufacture_id')->orderBy('id','DESC')->get();
        $data = [];
        foreach($vehicles as $vehicle) {
            $key = $vehicle->manufacture_id.$vehicle->name;
            if( isset($count[$vehicle->manufacture_id.$vehicle->name]) ) 
                $count[$key]++; 
            else 
                $count[$key] = 1;

            $vehicle->manufacture = Manufacturers::find($vehicle->manufacture_id)->name;
            $vehicle->count = $count[$key];

            $data[$key] = array(
                    "manufacture_id" => $vehicle->manufacture_id,
                    "manufacture" => $vehicle->manufacture,
                    "model" => $vehicle->name,
                    "count" => $vehicle->count
                );
        }
        return response()->json(['status' => true, "description"=>"List of Records", "response" => array_values($data) ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function upload(Request $request){
        
        if( $request->file('files') ) {
            $name = $request->file('files')->getClientOriginalName();
            $name = time().str_replace(" ", "", $name);
            $name = str_replace(":", "", $name);
            $request->file('files')->move(public_path().'/images/', $name);
            return response()->json(['status' => true, "description"=>"Uploaded Files", "response" => $name ], 200);
        } else {
            return response()->json(['status' => false, "description"=>"No Files Uploaded", "response" => '0' ], 200);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'color' => 'required',
            'reg_no' => 'required|unique:vehicles,reg_no',
            'note' => 'required',
            'date_manufactured' => 'required',
            'manufacture_id' => 'required'
        ]);

        if (!$validator->passes() ) {
            return response()->json(['status' => false, "description"=>"Validation Failed", "response" => $validator->errors()->all() ], 200);
        }
        
        $data = Vehicles::create($request->all());

        // Only one image is uploading - will modify it
        $filenameStr = $request->get('filename');
        if($filenameStr){
            $filenames = explode(":",$filenameStr);
            foreach($filenames as $name) {
                Images::create(['vehicle_id' => $data->id, 'path' => $name ]); 
            }
            $data->images = $filenames;
        }


        return response()->json(['status' => true, "description"=>"Successfully created", "response" => $data ], 200);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Vehicles  $vehicles
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicles $vehicles)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Vehicles  $vehicles
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicles $vehicles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Vehicles  $vehicles
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vehicles $vehicles)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Vehicles  $vehicles
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,Vehicles $vehicles)
    {
        $id = $request->get('id');
        if($id){
            $vehicles->find($id)->delete();
            return response()->json(['status' => true, "description"=>"Successfully Deleted", "response" => $id ], 200);
        }
        return response()->json(['status' => false, "description"=>"No Record found", "response" => $id ], 200);
    }

    public function sold(Request $request,Vehicles $vehicles)
    {
        $id = $request->get('id');
        $name = $request->get('name');
        if($id && $name){
            $vehicles->where(['manufacture_id'=>$id , 'name' => $name ])->delete();
            return response()->json(['status' => true, "description"=>"Sold Successfully", "response" => $id ], 200);
        }
    }
}