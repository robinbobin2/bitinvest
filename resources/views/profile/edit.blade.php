@extends('layouts.app') 

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
        <div class="col-lg-12">
        <h3>Редактировать профиль</h3>
    </div>
        <form method="post" class="row" action="{{route('profile.update', $user)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('patch') }}
    <div class="col-lg-6">

    
    <label for="name">Имя</label>
    <input type="text" class="form-control"  id="name" name="name"  value="{{ $user->name }}" />
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" name="email"  value="{{ $user->email }}" />
    <label for="telegram">Telegram аккаунт (для уведомлений)</label>
    <input type="text" class="form-control" id="telegram" name="telegram"  value="{{ $user->telegram }}" />

    <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Сохранить</button>

</div>
<div class="col-lg-4">
    <div class="col-sm-12">
    
    <img src="{{$user->photo ? $user->photo->file : 'http://placehold.it/200x200'}}" class="img-responsive img-rounded">
</div>
<input type="file" name="photo_id" class="form-control">
</div>

</form>
<div class="col-lg-6">
    <form method="post" class="row" action="{{route('profile.updatepass', $user)}}">
<label for="oldpassword">Старый пароль</label>
    <input type="password" class="form-control" id="oldpassword" name="oldpassword" />
<label for="password">Новый пароль</label>
    <input type="password" class="form-control" id="password" name="password" />
    <label for="password_confirmation">Подтвердить пароль</label>
    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" />
    <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Сохранить</button>

</form>
</div>
        </div>
    </div>
</div>
@endsection

