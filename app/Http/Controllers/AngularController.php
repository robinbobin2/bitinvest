<?php

namespace App\Http\Controllers;

use App\User;
use File;
use Illuminate\Support\Facades\Auth;

class AngularController extends Controller
{
    /**
     * Serve the angular application.
     *
     * @return \Illuminate\View\View
     */
    public function serve()
    {
        return File::get(public_path('dist/index.html'));
    }

    public function crypto($symbol)
    {
        return File::get(public_path('dist/index.html'));
    }

    public function user()
    {
        $user = Auth::user();
        if(!$user){
            return [
                'error' => 'User not loggined'
            ];
        }
        $newUser = User::with("Portfolio")->where('id', '=', $user->id)->first();
        return json_encode($newUser);
    }


}
