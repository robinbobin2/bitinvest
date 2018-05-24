<?php

namespace App\Http\Controllers;

use App\Category;
use App\IcoPercent;
use App\IcoProject;
use App\IcoRoadMap;
use App\IcoTeam;
use Illuminate\Http\Request;

class IcoProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $icoproject = IcoProject::all();
        return view('admin.icoproject.index', compact('icoproject'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $categories = Category::all()->where('type', 5);
        return view('admin.icoproject.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $icoproject = IcoProject::create($request->all());
        if ($file = $request->file('logo')) {
            $name = time(). $file->getClientOriginalName();
            $file->move('images', $name);
        }
        $icoproject->update(['logo'=>$name]);
        $icoproject = IcoProject::all();

        return view('admin.icoproject.index', compact('icoproject'));
        //
    }
    public function updateTeam(Request $request, $id)
    {
        $icoproject = IcoProject::findOrFail($id);
        
        if ($file = $request->file('photo')) {
            $name = time(). $file->getClientOriginalName();
            $file->move('images', $name);
            $team_member = new IcoTeam(['name'=>$request->name, 'workplace'=>$request->workplace,'photo'=>$name]);
        } else {
            $team_member = new IcoTeam(['name'=>$request->name, 'workplace'=>$request->workplace, 'photo'=>0]);

        }
        
        $icoproject->team_members()->save($team_member);
        return redirect()->back();
    }

    public function updateMap(Request $request, $id)
    {
        $icoproject = IcoProject::findOrFail($id);
        
        $roadmap = new IcoRoadMap($request->all());
        $icoproject->road_map()->save($roadmap);
        return redirect()->back();
    }

    public function updatePercent(Request $request, $id)
    {
        $icoproject = IcoProject::findOrFail($id);
        
        $percent = new IcoPercent($request->all());
        $icoproject->percents()->save($percent);
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
        $icoproject = IcoProject::findOrFail($id);
        $categories = Category::all()->where('type', 5);
        $roadmap = $icoproject->road_map;
        $team = $icoproject->team_members;
        $percent = $icoproject->percents;
        return view('admin.icoproject.edit', compact('icoproject', 'team','categories', 'roadmap', 'percent'));
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
        $ico = IcoProject::findOrFail($id)->delete();
        return redirect('/admin/ico')
            ->with('message', 'ICO Deleted Successfully!');
    }
}
