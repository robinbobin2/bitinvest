<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAlgorithmYearFieldsToCryptoStatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('crypto_stats', function (Blueprint $table) {
            //
            $table->integer('year')->nullable();
            $table->integer('algo')->nullable();
            $table->longText('desc');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('crypto_stats', function (Blueprint $table) {
            //
            $table->dropColumn('year');
            $table->dropColumn('algo');
            $table->dropColumn('desc');
        });
    }
}
