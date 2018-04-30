<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCatIdFieldToCryptoStatsTable extends Migration
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
            $table->integer('cat_id_news')->default(1);
            $table->integer('cat_id_analytics')->default(1);
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
            $table->dropColumn('cat_id_analytics');
            $table->dropColumn('cat_id_news');
        });
    }
}
