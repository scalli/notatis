<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->string('schoolname')->nullable('false');
            $table->string('smartschoolplatform')->nullable('false');
            $table->string('street');
            $table->string('number'); 
            $table->string('postcode');
            $table->string('city'); 
            $table->string('contact');
            $table->string('tel'); 
            $table->string('email');
            $table->string('language'); 
            $table->integer('schoolyear_filter');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schools');
    }
}
