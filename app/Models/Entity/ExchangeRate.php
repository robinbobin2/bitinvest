<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 14.04.2018
 * Time: 11:32
 */

namespace App\Models\Entity;


use Illuminate\Database\Eloquent\Model;

class ExchangeRate extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exchangeRates';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}