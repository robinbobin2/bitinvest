<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:38
 */

namespace App\Http\Controllers;


use App\Models\Founder\FounderEngine;
use App\Models\Founder\Models\Providers\PoloniexProvider;
use App\Models\SearchForm;
use Illuminate\Support\Facades\DB;

class BitController extends Controller
{
    private $engine;

    public function __construct()
    {
        $this->engine = new FounderEngine();
    }

    public function index()
    {
        $form = new SearchForm($_GET);
        if (!$form->validate()) {
            return [];
        }
        return $this->engine->sendRequest($form);
    }

    public function pair()
    {
        $exchanges = DB::select("CALL getPair('" . $_GET['pair'] . "')");
        $response = [];
        foreach ($exchanges as $exchange) {
            $response[$exchange->row] = $exchange->value;
        }
        return $response;
    }

    public function exchange($id)
    {
        return DB::select("CALL getExchange($id)");
    }
}