<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;
class CryptoController extends Controller
{
    //
    public function CryptoCompare() {
    	return view('cryptocompare.cryptocompare');
    }
}
