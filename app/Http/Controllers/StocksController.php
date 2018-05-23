<?php

namespace App\Http\Controllers;

use App\Category;
use App\CryptoStat;
use App\Stock;
use Illuminate\Http\Request;

class StocksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $news = Stock::all();
        return view('admin.stocks.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('admin.stocks.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->except('logo');
        if ($file = $request->file('logo')) {

            $name = time() . $file->getClientOriginalName();

            $file->move('images', $name);
            $data['logo']=$name;

        }
        $stock = Stock::create($data);
        
        return redirect('admin/exchanges')
        ->with('message', 'Stocks Created Successfully');
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
        $coins = CryptoStat::all();
        $stock = Stock::findOrFail($id);
        $categories = Category::all();

        return view('admin.stocks.edit', compact('coins', 'stock', 'categories'));
        //
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
        $stock = Stock::findOrFail($id);
        
        $stock->coins()->sync($request->coins);
        return redirect('admin/exchanges')
        ->with('message', 'Операция прошла успешно');
    }

    public function updateCats(Request $request, $id)
    {
        $stock = Stock::findOrFail($id);
        
        $stock->categories()->sync($request->categories);
        return redirect('admin/exchanges')
        ->with('message', 'Операция прошла успешно');
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
    }
    public function search() {

        if($_REQUEST['search']) {
            return CloudMining::where('name','like', '%'. $_REQUEST['search'].'%')->get();
            
        } else if($_REQUEST['search'] == ''){
            return ['error'=>'not found'];
        }
    }
}
