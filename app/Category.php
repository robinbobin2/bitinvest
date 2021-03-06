<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $fillable = [
        'name', 'type'
    ];
    public function news()
    {
        return $this->hasMany('App\News', 'cat_id');
    }
    public function interviews()
    {
        return $this->hasMany('App\Interview', 'cat_id');
    }
    public function analytics()
    {
        return $this->hasMany('App\Analytics', 'cat_id');
    }
    public function crypto_analytics()
    {
        return $this->hasMany('App\CryptoStat', 'cat_id_analytics');
    }
    public function crypto_news()
    {
        return $this->hasMany('App\CryptoStat', 'cat_id_news');
    }
    public function reviews()
    {
        return $this->hasMany('App\Review', 'cat_id');
    }
    public function ico()
    {
        return $this->hasMany('App\IcoProject', 'cat_id');
    }
    public function mining()
    {
        return $this->hasMany('App\CloudMining', 'cat_id');
    }
    
    
}
