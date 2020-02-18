<?php

namespace App\Http\Controllers;

use App\Manufacturers;
use Validator;
use Illuminate\Http\Request;

class ManufacturersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $manufacturers = Manufacturers::select('id','name')->orderBy('id','DESC')->get();
        return response()->json(['status' => true, "description"=>"List of Records", "response" => $manufacturers ], 200);
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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
                        'name' => 'required|unique:manufacturers,name'
                    ]);

        if (!$validator->passes() ) {
            return response()->json(['status' => false, "description"=>"Validation Failed", "response" => $validator->errors()->all() ], 200);
        }

        $id = Manufacturers::create($request->all());
        return response()->json(['status' => true, "description"=>"Successfully created", "response" => $id ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Manufacturers  $manufacturers
     * @return \Illuminate\Http\Response
     */
    public function show(Manufacturers $manufacturers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Manufacturers  $manufacturers
     * @return \Illuminate\Http\Response
     */
    public function edit(Manufacturers $manufacturers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Manufacturers  $manufacturers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Manufacturers $manufacturers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Manufacturers  $manufacturers
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Manufacturers $manufacturers)
    {
        $id = $request->get('id');
        if($del = $manufacturers->find($id)){
          $name = $del->name;
          $del->delete();
          return response()->json(['status' => true, "description"=>"Successfully Deleted", "response" => $name ], 200);
        }
        return response()->json(['status' => false, "description"=>"No Record found", "response" => $id ], 200);
    }
}
