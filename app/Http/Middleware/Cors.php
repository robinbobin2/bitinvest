<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
        ->header('Access-Controll-Allow-Origin', '*')
        ->header('Access-Controll-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
        ->header('Access-Controll-Allow-Headers', 'Content-type, X-Auth-Token, Origin, Authorisation, X-Requested-With');


    }
}
