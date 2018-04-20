<?php

namespace App\Http\Controllers;

use App\Photo;
use App\UserPortfolioType;
use Auth;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        //
        $user = Auth::user();
        $portfolios = $user->portfolio;
        $portfolio_types = UserPortfolioType::all();
        return view('profile.index', compact('user', 'portfolios', 'portfolio_types'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        return view('profile.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $user = Auth::user();
        if (trim($request->password) == '') {
            # code...
            $input = $request->except('password');
        } else {
            $input = $request->all();
            $input['password'] = bcrypt($request->password);
        }
        if ($file = $request->file('photo_id')) {
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);

            $photo = Photo::create(['file' => $name]);


            $input['photo_id'] = $photo->id;
            # code...
        }
        $user->update($input);
        return redirect('/profile/');
    }

    public function updatePassword(Request $request, $id)
    {
        //
        $user = Auth::user();
        if (bcrypt($request->oldpassword) == Auth::user()->password) {
            # code...

            if (trim($request->password) == '') {
                # code...
                $input = $request->except('password');
            } else {
                $input = $request->all();
                $input['password'] = bcrypt($request->password);
            }
            $user->update($input);
        }
        return redirect('/profile/');
    }

    public function register()
    {

    }

    public function delete($id)
    {

    }

    public function login()
    {

    }
}
