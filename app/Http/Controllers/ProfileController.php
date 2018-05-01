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
        if ($request->isMethod("POST")) {
//            echo "hello";die();
        }
        return view('profile.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return mixed
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        if($request->request->get("email")){
            $user->email = $request->request->get("email");
        }
        if($request->request->get("name")){
            $user->name = $request->request->get("name");
        }
        if($request->request->get("telegram")){
            $user->telegram = $request->request->get("telegram");
        }
        $user->update();
        return [
            'status' => 'success'
        ];
    }

    public function updatePassword(Request $request, $id)
    {
        $user = Auth::user();
        if (Hash::check($request->oldpassword, Auth::user()->password)) {            # code...
            $input['password'] = Hash::make($request->get("password"));
            $user->update($input);
            return response()->json(['success' => 'success'], 200);
        } else {
            return abort(401);
        }
    }
    public function lostPassword(Request $request)
    {
        if (User::where('email', $request->email)->firstOrFail()) {            # code...
            return response(200);
        } else {
            return abort(401);
        }
    }

    /**
     * @param Request $request
     * @throws \Exception
     */
    public function register(Request $request)
    {
        if ($request->request->get("password") != $request->request->get("password_repeat")) {
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
        return $user;
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
