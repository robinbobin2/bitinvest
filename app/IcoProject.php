<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IcoProject extends Model
{
    protected $uploads = '/images/';

    public function getLogoAttribute($photo) {
        return $this->uploads.$photo;
    }
    //
    protected $fillable = [
    	'logo','name','status','website','cat_id','escrow',
    	'aim','type','white_paper','currencies','platform',
    	'place','about','money','money_start','money_end',
    	'current_money', 'number_people'
    ];
    public function team_members()
    {
        return $this->hasMany('App\IcoTeam', 'ico_id');
    }
    public function road_map()
    {
        return $this->hasMany('App\IcoRoadMap', 'ico_id');
    }
    public function percents()
    {
        return $this->hasMany('App\IcoPercent', 'ico_id');
    }
    public function category()
    {
        return $this->belongsTo('App\Category', 'cat_id');
    }
    public function comments() {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
