<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClass1sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class1s', function (Blueprint $table) {
            $table->id();
            $table->string('class1');
            $table->integer('schoolyear_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('schoolyear_id')->references('id')->on('schoolyears');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('class1s');
    }
}
