<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CryptoStat extends Model
{
    //
    protected $fillable = ['name', 'symbol', 'year', 'algo', 'desc'];
    public function comments() {
        return $this->morphMany('App\Comment', 'commentable')->orderByDesc('created_at');
    }
    public function category_news()
    {
        return $this->belongsTo('App\Category', 'cat_id_news');
    }
    public function category_analytics()
    {
        return $this->belongsTo('App\Category', 'cat_id_analytics');
    }
}
