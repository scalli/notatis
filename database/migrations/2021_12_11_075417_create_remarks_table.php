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
            $table->dateTime('date')->nullable('false');
            $table->string('extra_info');
            $table->string('remark')->nullable('false');
            $table->integer('severity_id')->unsigned()->nullable('false');
            $table->integer('remarkoption_id')->nullable('false');
            $table->integer('student_id')->nullable('false');
            $table->integer('teacher_id')->nullable('false');
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
