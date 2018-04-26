<?php

use Illuminate\Database\Seeder;

class UserPortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('user_portfolio_types')->insert([
         	'name'=>'Облачный майнинг'
         ])
    }
}
