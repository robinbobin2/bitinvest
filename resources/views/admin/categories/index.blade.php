@extends('layouts.admin')



@section('content')


<h1>Категории</h1>

<div class="row">
<div class="col-lg-3">
	<div class="row"> 
    <form method="post" action="{{route('categories.store')}}" >

{{csrf_field()}}
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="" name="name" id="name" class="form-control">
</div>
<div class="form-group">
<label for="name">Тип поста</label> 
<select name="type"  class="form-control">
  <option value="1">Новости</option>
  <option value="2">Интервью</option>
  <option value="3">Аналитика</option>
  <option value="4">Обзоры</option>
  <option value="5">ICO проекты</option>
  <option value="6">Облачный майнинг</option>
</select>
</div>
<input type="submit" class="btn btn-primary" value="Создать категорию" /> 
</form>
</div>
<div class="row">
{{-- @include('includes.formerror') --}}
</div>

	
</div>

<div class="col-lg-9">
	<table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Нaзвание</th>
        <th>Дата создания</th>
      </tr>
    </thead>
    <tbody>
    	@if($categories)
    	@foreach($categories as $category)
      <tr>
        <td>{{$category->id}}</td>
        <td><a href="{{route('categories.edit', $category->id)}}" >{{$category->name}}</a></td>
        <td>{{$category->created_at ? $category->created_at->diffForHumans() : 'Нет даты '}}</td>
      </tr>
      	@endforeach
      	@endif
    </tbody>
  </table>
</div>
</div>
@stop 