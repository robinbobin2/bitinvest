@extends('layouts.admin')



@section('content')


<h1>ICO проекты</h1>

<div class="row">
<a href="{{route('icoproject.create')}}" class="btn btn-primary">Создать</a>
<div class="col-lg-12">
	<table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Нaзвание</th>
        <th>Дата создания</th>
      </tr>
    </thead>
    <tbody>
    	@if($icoproject)
    	@foreach($icoproject as $item)
      <tr>
        <td>{{$item->id}}</td>
        <td><a href="{{route('icoproject.edit', $item->id)}}" >{{$item->name}}</a></td>
        <td>{{$item->created_at ? $item->created_at->diffForHumans() : 'Нет даты '}}</td>
      </tr>
      	@endforeach
      	@endif
    </tbody>
  </table>
</div>
</div>
@stop 