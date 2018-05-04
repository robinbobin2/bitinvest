<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    //

	protected $uploads = '/images/';

    protected $fillable = ['file','imageable_type','imageable_id'];


    public function getFileAttribute($photo) {
    	return $this->uploads.$photo;
    }
    public function imageable() {
    	return $this->morphTo();
    }
}
