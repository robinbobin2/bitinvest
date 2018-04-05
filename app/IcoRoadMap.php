<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IcoRoadMap extends Model
{
    //
	protected $fillable = [
		'date','desc'
	];

    public function ico()
    {
        return $this->belongsTo('App\IcoProject', 'ico_id');
    }
}
