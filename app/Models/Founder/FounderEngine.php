<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:50
 */

namespace App\Models\Founder;


use App\Models\Entity\Exchange;
use Illuminate\Support\Facades\DB;

class FounderEngine
{
    public function sendRequest($request)
    {
        $exchanges = DB::select("select * from test");
        $response = [];
        foreach ($exchanges as $exchange){
            $response[$exchange->currency][$exchange->time] = $exchange->value;
        }
        return $response;
    }
}