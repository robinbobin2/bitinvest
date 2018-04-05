<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CryptoStat extends Model
{
    //
    protected $fillable = ['name', 'symbol', 'year', 'algo', 'desc'];
}
