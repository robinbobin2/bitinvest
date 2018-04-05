@extends('layouts.admin')




@section('content')
<h1>Редактировать пользователя</h1>
<div class="row">
<form method="post" class="row" action="{{route('users.update', $user)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('patch') }}
    <div class="col-lg-6">

    
    <label for="name">Имя</label>
    <input type="text" class="form-control"  id="name" name="name"  value="{{ $user->name }}" />
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" name="email"  value="{{ $user->email }}" />
    <label for="telegram">Telegram аккаунт (для уведомлений)</label>
    <input type="text" class="form-control" id="telegram" name="telegram"  value="{{ $user->telegram }}" />
<label for="password">Новый пароль</label>
    <input type="password" class="form-control" id="password" name="password" />
    <label for="password_confirmation">Подтвердить пароль</label>
    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" />
    <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Сохранить</button>

</div>
<div class="col-lg-4">
    <div class="col-sm-12">
    
    <img src="{{$user->photo ? $user->photo->file : 'http://placehold.it/200x200'}}" class="img-responsive img-rounded">
</div>
<input type="file" name="photo_id" class="form-control">
</div>

</form>

</div>
<form style="margin-top: 20px;" method="post" class="row" action="{{route('users.destroy', $user)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить пользователя" class="btn btn-danger pull-right col-sm-6">
</form>
</div>
<div class="row">

</div>
@endsection