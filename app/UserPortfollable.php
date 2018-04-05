<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPortfollable extends Model
{
    //
    
    protected $fillable = ['user_portfolio_id', 'user_portfollable_id', 'user_portfollable_type'];
}
