<?php

namespace App\Http\Controllers;

use App\CloudMining;
use App\DepoHistory;
use Illuminate\Http\Request;

class CloudMiningController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $mining = CloudMining::all();
        return view('admin.mining.index', compact('mining'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.mining.create');
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

        $mining = CloudMining::create($request->all());
        if ($file = $request->file('logo')) {
            $name = time(). $file->getClientOriginalName();
            $file->move('images', $name);
        }
        $mining->update(['logo'=>$name]);
        $mining = CloudMining::all();

        return view('admin.mining.index', compact('mining'));
    }
    public function updateHistory(Request $request, $id)
    {
        $mining = CloudMining::findOrFail($id);
        $history = new DepoHistory($request->all());
        $mining->history()->save($history);
        return redirect()->back();
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
       // return view('admin.mining.index');
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
        $mining = CloudMining::find($id);
        $history = $mining->history;
        $got = 0;
        foreach ($history as $item) {
            if ($item->type == 2) {
                $got = $got+$item->price;
            } else {
                $got = $got-$item->price;
            }
        }

        $latest_history = $mining->history->where('type', 2)->last();
        if ($latest_history) {
           $latest_date = round((strtotime("now") - strtotime($latest_history->datetime))  / (60 * 60 * 24), 0);
        } else {
            $latest_date = null;
        }






        $start_days = round((strtotime("now") - strtotime($mining->start))  / (60 * 60 * 24));
        $depo_date = round((strtotime("now") - strtotime($mining->depo_date))  / (60 * 60 * 24));
        $percentage = round($got / ($mining->depo / 100),2);
        return view('admin.mining.edit', compact('mining', 'history', 'percentage', 'start_days', 'depo_date', 'latest_date'));
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
        $mining = CloudMining::findOrFail($id)->update($request->all());
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
        //
        return view('admin.mining.index');
    }
}
