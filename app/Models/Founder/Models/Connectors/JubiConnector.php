<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:37
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class JubiConnector extends FounderConnector
{
    public function describe () {
        return array_replace_recursive (parent::describe (), array (
            'id' => 'jubi',
            'name' => 'jubi.com',
            'countries' => 'CN',
            'rateLimit' => 1500,
            'version' => 'v1',
            'has' => array (
                'CORS' => false,
                'fetchTickers' => true,
            ),
            'urls' => array (
                'logo' => 'https://user-images.githubusercontent.com/1294454/27766581-9d397d9a-5edd-11e7-8fb9-5d8236c0e692.jpg',
                'api' => 'https://www.jubi.com/api',
                'www' => 'https://www.jubi.com',
                'doc' => 'https://www.jubi.com/help/api.html',
            ),
        ));
    }

    public function fetch_markets () {
        $markets = $this->publicGetAllticker ();
        $keys = is_array ($markets) ? array_keys ($markets) : array ();
        $result = array ();
        for ($p = 0; $p < count ($keys); $p++) {
            $id = $keys[$p];
            $base = strtoupper ($id);
            $quote = 'CNY'; // todo
            $symbol = $base . '/' . $quote;
            $base = $this->common_currency_code($base);
            $quote = $this->common_currency_code($quote);
            $result[] = array (
                'id' => $id,
                'symbol' => $symbol,
                'base' => $base,
                'quote' => $quote,
                'info' => $id,
            );
        }
        return $result;
    }
}