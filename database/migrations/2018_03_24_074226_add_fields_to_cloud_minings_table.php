<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToCloudMiningsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cloud_minings', function (Blueprint $table) {
            //
            $table->string('logo')->nullable();
            $table->longText('desc');
            $table->string('depo_date')->nullable();
            $table->string('start');
            $table->string('website')->nullable();
            $table->string('lang');
            $table->integer('ref')->default(0);
            $table->longText('ref_about')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cloud_minings', function (Blueprint $table) {
            //
            $table->dropColumn('desc');
            $table->dropColumn('depo_date');
            $table->dropColumn('start');
            $table->dropColumn('website');
            $table->dropColumn('lang');
            $table->dropColumn('ref');
            $table->dropColumn('ref_about');
        });
    }
}
