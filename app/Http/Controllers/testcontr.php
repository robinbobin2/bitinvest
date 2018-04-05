<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\test;
class testcontr extends Controller
{
    //
    public function store(Request $request) {
    	
    	// $req = json_decode($request->getContent(), true);
    	test::create(['test'=>$request->input('test')]);
    	// return $req;
    }
}
