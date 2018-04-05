<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DepoHistory extends Model
{
    //
    protected $fillable = [
        'price', 'type', 'comment', 'datetime', 'cloud_minings_id'
    ];

    public function cloud_mining()
    {
        return $this->belongsTo('App\CloudMining', 'cloud_minings_id');
    }
}
