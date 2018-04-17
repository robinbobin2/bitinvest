<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:41
 */

namespace App\Models;


class SearchForm
{
    private $currencyFrom;

    private $currencyTo;

    public function __construct(array $request)
    {
        $this->currencyFrom = isset($request['currencyFrom']) ? $request['currencyFrom'] : null;
        $this->currencyTo = isset($request['currencyTo']) ? $request['currencyTo'] : null;
    }

    /**
     * @return bool
     */
    public function validate()
    {
        if($this->currencyTo || $this->currencyFrom){
            return false;
        }
        return true;
    }
}