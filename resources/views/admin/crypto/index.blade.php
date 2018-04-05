@extends('layouts.admin')


@section('content')

@if(Session::has('crypto_add')) 

<p class="bg-success">{{session('crypto_add')}}</p>
@endif
<h1>Криптовалюты</h1>
<a href="{{route('crypto.create')}}" class="btn btn-primary" style="margin: 10px 0;">Создать криптовалюту</a>
<table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Название криптовалюты</th>
        <th>Трехбуквенное обозначение</th>
        <th>Добавлена</th>
        <th>Обновлена</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    	@if($crypto)
    	@foreach($crypto as $item)
      <tr>
        <td>{{$item->id}}</td>
        <td><a href="{{route("crypto.edit",$item->id)}}" >{{$item->name}}</a></td>
        <td>{{$item->symbol}}</td>
        <td>{{$item->created_at->diffForHumans()}}</td>
        <td>{{$item->updated_at->diffForHumans()}}</td>
        <td><a href="/crypto/{{$item->symbol}}">Перейти</a>
      </tr>
      	@endforeach
      	@endif
    </tbody>
  </table>


@endsection