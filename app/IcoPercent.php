<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IcoPercent extends Model
{
	protected $fillable = [
    	'percent','name','ico_id',
    ];
    public function ico()
    {
        return $this->belongsTo('App\IcoProject', 'ico_id');
    }
    //
}
