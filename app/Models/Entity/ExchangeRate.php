<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 14.04.2018
 * Time: 11:32
 */

namespace App\Models\Entity;


use Illuminate\Database\Eloquent\Model;

/**
 * Class ExchangeRate
 * @package App\Models\Entity
 * @property float $value
 * @property float $volume
 * @property float $bid
 * @property float $ask
 * @property string $currency
 * @property int $exchangeId
 * @property int $createTime
 */
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