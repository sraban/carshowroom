<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('color');
            $table->string('reg_no');
            $table->string('note');
            $table->date('date_manufactured');
            $table->bigInteger('manufacture_id')->unsigned();
            $table->index(['manufacture_id']);
            $table->timestamps();
        });

        Schema::table('vehicles', function(Blueprint $table) {
            $table->foreign('manufacture_id')
                ->references('id')
                ->on('manufacturers')
                ->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicles');
    }
}
