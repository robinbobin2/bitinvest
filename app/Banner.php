<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    //
    protected $fillable = [

    	'file'

    ];

    public function frontends()
    {
        return $this->belongsToMany('App\FrontEnd', 'banner_frontend');
    }

}
