<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    //
    protected $fillable = [

    	'file', 'start_date', 'end_date'

    ];
    protected $uploads = '/images/';


    public function getFileAttribute($file) {
    	return $this->uploads.$file;
    }

    public function frontends()
    {
        return $this->belongsToMany('App\FrontEnd', 'banners_front_ends');
    }

}
