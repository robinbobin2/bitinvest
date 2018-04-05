<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPortfolioType extends Model
{
    //
    protected $fillable = ['name'];

	public function portfolios()
    {
        return $this->hasMany('App\UserPortfolio', 'user_portfolio_type_id');
    }
    
}
