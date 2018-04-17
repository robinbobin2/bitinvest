<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 0:23
 */

namespace App\Models\Entity;


use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exchanges';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}