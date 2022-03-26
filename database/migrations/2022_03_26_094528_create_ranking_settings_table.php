<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRankingSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ranking_settings', function (Blueprint $table) {
            $table->id();
            $table->integer('ranking_start_total');
            $table->integer('one_penalty');
            $table->integer('two_penalty');
            $table->integer('three_penalty');
            $table->integer('four_penalty');
            $table->integer('ranking_start_date');
            $table->integer('ranking_end_date');
            $table->integer('last_updated');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ranking_settings');
    }
}
