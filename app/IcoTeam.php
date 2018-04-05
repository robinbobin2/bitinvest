<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IcoTeam extends Model
{
	protected $uploads = '/images/';

    public function getPhotoAttribute($photo) {
    	return $this->uploads.$photo;
    }
	protected $fillable = [
		'name','photo', 'workplace', 'ico_id'
	];
    //
    public function ico()
    {
        return $this->belongsTo('App\IcoProject', 'ico_id');
    }
}
