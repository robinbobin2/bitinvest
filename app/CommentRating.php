<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentRating extends Model
{
	protected $fillable = ['comment_id', 'user_id', 'positive'];
    //
}
