<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveAimFromIcoProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ico_projects', function (Blueprint $table) {
            //
            $table->dropColumn('aim');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ico_projects', function (Blueprint $table) {
            //
            $table->string('aim')->nullable();
        });
    }
}
