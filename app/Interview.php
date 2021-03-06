<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Interview extends Model
{
    //
    protected $fillable = [
        'title',
        'desc',
        'view_count',
        'cat_id',
        'main',
        'name_credits',
        'workplace',
        'to_news'
    ];
    //
    public function photos() {
    	return $this->morphMany('App\Photo', 'imageable');
    }
    public function comments() {
    	return $this->morphMany('App\Comment', 'commentable');
    }
    public function category()
    {
        return $this->belongsTo('App\Category', 'cat_id');
    }
}
