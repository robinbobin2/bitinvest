<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    
	protected $fillable = ['post_id', 'author', 'photo', 'email', 'body', 'is_active', 'commentable_id', 'commentable_type'];

    public function replies() {
    	return $this->hasMany('App\CommentReply');
    }
    public function post() {
    	return $this->belongsTo('App\Post');
    }
    public function commentable() {
    	return $this->morphTo();
    }
    public function rating() {
        return $this->hasMany('App\CommentRating');
    }
}
