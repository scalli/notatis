<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remarks', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date')->nullable('true');
            $table->string('extra_info')->nullable('false');;
            $table->string('remark')->nullable('true');
            $table->integer('severity_id')->unsigned()->nullable('true');
            //$table->integer('remarkoption_id')->nullable('true');
            $table->integer('student_id')->nullable('true');
            $table->integer('teacher_id')->nullable('true');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('student_id')->references('id')->on('users');
            $table->foreign('teacher_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('remarks');
    }
}
