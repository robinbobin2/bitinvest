<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:56
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CobinhoodConnector;
use App\Models\Founder\Models\FounderProvider;

class CobinhoodProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 19;
    }

    protected function getConnectorClass()
    {
        return new CobinhoodConnector();
    }

    /**
     * @return CobinhoodConnector
     */
    protected function getConnector()
    {
        /** @var CobinhoodConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}