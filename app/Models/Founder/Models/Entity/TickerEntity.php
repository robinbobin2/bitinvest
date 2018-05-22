<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 22.05.2018
 * Time: 10:50
 */

namespace App\Models\Founder\Models\Entity;


class TickerEntity
{
    private $value;

    private $volume;

    private $bid;

    private $ask;

    private $currency;

    private $exchangeId;

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param mixed $value
     */
    public function setValue($value): void
    {
        $this->value = $value;
    }

    /**
     * @return mixed
     */
    public function getVolume()
    {
        return $this->volume;
    }

    /**
     * @param mixed $volume
     */
    public function setVolume($volume): void
    {
        $this->volume = $volume;
    }

    /**
     * @return mixed
     */
    public function getBid()
    {
        return $this->bid;
    }

    /**
     * @param mixed $bid
     */
    public function setBid($bid): void
    {
        $this->bid = $bid;
    }

    /**
     * @return mixed
     */
    public function getAsk()
    {
        return $this->ask;
    }

    /**
     * @param mixed $ask
     */
    public function setAsk($ask): void
    {
        $this->ask = $ask;
    }

    /**
     * @return mixed
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * @param mixed $currency
     */
    public function setCurrency($currency): void
    {
        $this->currency = $currency;
    }

    /**
     * @return mixed
     */
    public function getExchangeId()
    {
        return $this->exchangeId;
    }

    /**
     * @param mixed $exchangeId
     */
    public function setExchangeId($exchangeId): void
    {
        $this->exchangeId = $exchangeId;
    }
}