<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 10:42
 */

namespace App\Models\Founder\Models\Requests;


use App\Models\Founder\Models\FounderProvider;

class Request
{
    /**
     *
     */
    const SEARCH_FUNCTION = 'search';
    /**
     * @var FounderProvider
     */
    public $provider;

    /**
     * @var string
     */
    private $function = self::SEARCH_FUNCTION;

    /**
     * @param FounderProvider $provider
     */
    public function setProvider(FounderProvider $provider)
    {
        $this->provider = $provider;
    }

    /**
     * @return string
     */
    public function getFunction()
    {
        return $this->function;
    }
}