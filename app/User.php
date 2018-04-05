<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'telegram', 'photo_id', 'role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function Role() {
       return $this->belongsTo('App\Role');
    }
    public function Photo() {
        return $this->belongsTo('App\Photo');
    }

    public function Portfolio() {
        return $this->hasMany('App\UserPortfolio', 'user_id');
    }

    // checkRole
    public function isAdmin() {

        if ($this->role->id == 1 ) {
            
            return true;




        }

        return false;

    }
}
