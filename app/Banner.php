<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    //
    protected $fillable = [

    	'file', 'start_date', 'end_date'

    ];

    public function frontends()
    {
        return $this->belongsToMany('App\FrontEnd', 'banner_front_ends');
    }

}
