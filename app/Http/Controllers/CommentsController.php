<?php

namespace App\Http\Controllers;

use App\Comment;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = Auth::user();

        $data = [
            'post_id' => $request->post_id,
            'author' => $user->name,
            'email' => $user->email,
            'photo' => $user->photo->file,
            'body' => $request->body,


        ];

        Comment::create($request->all());
        $request->session()->flash('comment_message', 'Сообщение успешно опубликовано');
        return redirect()->back();
        //
    }
    public function storeRaw(Request $request) {
        $user = Auth::user();
        $data = [
            'post_id' => $request->input('post_id'),
            'author' => $user->name,
            'email' => $user->email,
            'body' => $request->input('body'),
            'commentable_id' => $request->input('post_id'),
            'commentable_type' => $request->input('commentable_type'),

        ];
        if ($user->photo) {
            $data['photo']=$user->photo->file;
        } else {
            $data['photo']='http://placehold.it/200x200';
        }

        $comment = Comment::create($data);
        return $comment;
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
        $comment = Comment::findOrFail($id);
        return view('comments.edit', compact('comment'));
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
        Session::flash('updated_comment', 'Комментарий успешно изменен');
        $comment = Comment::findOrFail($id);
        $input = $request->all();
        $comment->update($input);
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
        Comment::findOrFail($id)->delete();
        return redirect('/chart');
        //
    }
}
