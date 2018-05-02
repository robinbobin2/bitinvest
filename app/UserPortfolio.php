<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPortfolio extends Model
{
	protected $fillable = ['name', 'user_portfolio_type_id', 'user_id'];

	public function portfolio_type()
    {
        return $this->belongsTo('App\UserPortfolioType', 'user_portfolio_type_id');
    }
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

     public function minings()
    {
        return $this->morphedByMany('App\CloudMining', 'user_portfollable');
    }
    public function ico()
    {
        return $this->morphedByMany('App\IcoProject', 'user_portfollable');
    }
    //
}
