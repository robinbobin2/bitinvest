<?php

namespace App\Http\Controllers;

use App\CryptoStat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AdminCryptoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $crypto = CryptoStat::all();
        return view('admin.crypto.index', compact('crypto'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.crypto.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        CryptoStat::create($request->all());
        $request->session()->flash('crypto_add', 'Криптовалюта успешно добавлена');
        return redirect('admin/crypto');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $crypto = CryptoStat::findOrFail($id);
        return view('admin.crypto.edit', compact('crypto'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        Session::flash('updated_crypto', 'Криптовалюта успешно изменена');
        $crypto = CryptoStat::findOrFail($id);
        $input = $request->all();
        $crypto->update($input);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CryptoStat::findOrFail($id)->delete();
        return redirect('admin/crypto');
        //
    }
}
