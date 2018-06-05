<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FrontEnd extends Model
{
	protected $fillable = [

    	'name'

    ];

	public function banners()
    {
        return $this->belongsToMany('App\Banner', 'banners_front_ends');
    }
    //
}
