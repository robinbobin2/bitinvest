<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDepoHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('depo_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('price');
            $table->integer('type');
            $table->longText('comment');
            $table->string('datetime');
            $table->integer('cloud_minings_id')->unsigned()->nullable();
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
        Schema::dropIfExists('depo_histories');
    }
}
