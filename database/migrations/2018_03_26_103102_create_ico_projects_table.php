<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIcoProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ico_projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('logo')->nullable();
            $table->string('name');
            $table->integer('status');
            $table->string('website')->nullable();
            $table->integer('cat_id');
            $table->integer('escrow')->default(0);
            $table->string('aim')->nullable();
            $table->integer('type');
            $table->string('white_paper')->nullable();
            $table->string('currencies')->nullable();
            $table->string('platform')->nullable();
            $table->string('place')->nullable();
            $table->longText('about')->nullable();
            $table->integer('money')->default(0);
            $table->string('money_start')->nullable();
            $table->string('money_end')->nullable();
            $table->integer('current_money')->default(0);
            $table->integer('number_people')->default(0);
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
        Schema::dropIfExists('ico_projects');
    }
}
