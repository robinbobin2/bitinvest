<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CloudMining extends Model
{
    //
    protected $uploads = '/images/';

    public function getLogoAttribute($photo) {
    	return $this->uploads.$photo;
    }
    protected $fillable = [
        'name', 'proc', 'depo', 'recieved', 'status', 'desc', 'ref', 'depo_date', 'website', 'lang', 'start', 'logo'
    ];

    public function history()
    {
        return $this->hasMany('App\DepoHistory', 'cloud_minings_id');
    }
    public function portfolio()
    {
        return $this->morphToMany('App\UserPortfolio', 'user_portfollable');
    }
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
