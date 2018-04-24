<?php

namespace App\Http\Controllers;

use App\Photo;
use App\User;
use App\UserPortfolioType;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{


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
    public function edit($id, Request $request)
    {
        $user = Auth::user();
        if($request->isMethod("POST")){
//            echo "hello";die();
        }
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

    /**
     * @param Request $request
     * @throws \Exception
     */
    public function register(Request $request)
    {
        if($request->request->get("password") != $request->request->get("password_repeat")){
            throw new \Exception("Пароли не совпадают", 404);
        }
        $user = new User();
        $user->password = Hash::make($request->request->get("password"));
        $user->email = $request->request->get("email");
        $user->telegram = '';
        $user->name = $user->email;
        $user->role_id = 2;
        $user->photo_id = 0;

        $user->save();
        Auth::loginUsingId($user->id);
    }

    /**
     * @param $id
     * @throws \Exception
     */
    public function delete($id)
    {
        /** @var User $user */
        $user = User::where('id', $id)->first();
        $user->delete();
    }

    public function login(Request $request)
    {
        $status = 'denied';
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $status = 'success';
        }

        return [
            'status' => $status
        ];
    }
}
