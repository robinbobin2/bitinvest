@extends('layouts.admin')


@section('content')

@if(Session::has('deleted_user')) 

<p class="bg-danger">{{session('deleted_user')}}</p>
@endif
<h1>Пользователи</h1>

<table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Ник</th>
        <th>Фото</th>
        <th>Email</th>
        <th>Полномочия</th>
        <th>Зарегистрировался</th>
        <th>Обновлялся</th>
      </tr>
    </thead>
    <tbody>
    	@if($users)
    	@foreach($users as $user)
      <tr>
        <td>{{$user->id}}</td>
        <td><a href="{{route("users.edit",$user->id)}}" >{{$user->name}}</a></td>
        <td><img height="50" src="{{$user->photo ? $user->photo->file : 'http://placehold.it/50x50'}}" alt="" /></td>
        <td>{{$user->email}}</td>
        <td>{{$user->role->name}}</td>
        <td>{{$user->created_at->diffForHumans()}}</td>
        <td>{{$user->updated_at->diffForHumans()}}</td>
      </tr>
      	@endforeach
      	@endif
    </tbody>
  </table>


@endsection