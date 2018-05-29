<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
	protected $fillable = [
		'name', 'year', 'ref','languages', 'desc', 'logo', 'website', 'exchange', 'country'

	];
	public function coins() {
        return $this->belongsToMany('App\CryptoStat');
    }
    public function comments() {
    	return $this->morphMany('App\Comment', 'commentable')->orderByDesc('created_at');
    }
    public function categories() {
        return $this->belongsToMany('App\Category');
    }
}
