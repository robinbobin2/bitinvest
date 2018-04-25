@extends('layouts.admin')



@section('content')
<h1>Облачный майнинг редактирование</h1>
<img src="{{$mining->logo != 0 ? $mining->logo : 'http://placehold.it/100x100'}}" class="img-responsive img-rounded">
<div class="col-lg-12">
	<div class="row"> 
    <form class="col-lg-10" method="post" action="{{route('mining.update', $mining)}}" >

    	<h5 style="margin-top: 20px;">Начало проекта</h5>
    	<p><strong>{{$start_days}}</strong> дней назад</p>
    	<h5 style="margin-top: 20px;">Тестовый депозит</h5>
    	<p><strong>{{$depo_date}}</strong> дней назад</p>
    	<h5 style="margin-top: 20px;">Последняя выплата</h5>
    	<p><strong>{{$latest_date}}</strong> дней назад</p>
    	<h5 style="margin-top: 20px;">Выплачено</h5>
<div class="progress" style="margin: 0 0 15px">

  <div class="progress-bar bg-danger" role="progressbar" style="width: {{$percentage}}%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><strong>{{$percentage}}%</strong></div>
</div>
{{csrf_field()}}
{{ method_field('patch') }}
<div class="form-group">
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="{{$mining->name}}" name="name" id="name" class="form-control">
</div>


<div class="form-group">
<label for="start">Дата запуска</label> 
<input type="text" value="{{$mining->start}}" name="start" id="start" class="form-control">


</div>

<div class="form-group">
<label for="lang">Язык сервиса</label> 
<input type="text" value="{{$mining->lang}}" name="lang" id="lang" class="form-control">


</div>

<div class="form-group">
<label for="website">Сайт сервиса</label> 
<input type="text" value="{{$mining->website}}" name="website" id="website" class="form-control">


</div>

<div class="form-group">
<label for="website">Описание сервиса</label> 
<textarea name="desc" class="form-control">{{$mining->desc}}</textarea>


</div>

<div class="form-group">
<label for="logo">Логотип</label> 
<input type="file" name="logo" id="logo">


</div>



<div class="form-group">
<label for="proc">Годовой процент доходности</label> 
<input type="text" value="{{$mining->proc}}" name="proc" id="proc" class="form-control">


</div>
<div class="form-group">
<label for="depo">Депозит (если есть)</label> 
<input type="text" value="{{$mining->depo}}" name="depo" id="depo" class="form-control">


</div>

<div class="form-group">
<label for="depo">Дата депозита</label> 
<input type="text" value="{{$mining->depo_date}}" name="depo_date" id="depo_date" class="form-control">


</div>

<div class="form-group">
<label for="is_top">Топ бирж</label> 
<select name="is_top"  class="form-control">
	@if($mining->is_top ==1) 
	<option value="1" selected>Да</option>
	<option value="0">Нет</option>
  	@else
  	<option value="1">Да</option>
	<option value="0" selected>Нет</option>
  
</select>

</div>
<input type="submit" class="btn btn-success" value="Редактировать сервис" /> 
</form>
<form method="post" class="col-lg-12" style="margin-top: 20px;" action="{{route('mining.updatehistory', $mining)}}" >

{{csrf_field()}}
{{ method_field('post') }}
<div class="form-group">
<h3>История операций с тестовым депозитом</h3>
<table class="table table-striped">
	<tr>
		<td>Сумма</td>
		<td>Операция</td>
		<td>Комментарий</td>
		<td>Дата</td>
	</tr>
	@foreach($history as $item)
	<tr>
		
		<td>{{$item->price}}</td>
		<td>{{$item->type}}</td>
		<td>{{$item->comment}}</td>
		<td>{{$item->datetime}}</td>
	</tr>
	@endforeach
	<tr>
		<td><input type="text" name="price" class="form-control"></td>
		<td><select name="type" class="form-control">
			<option value="1">Внесение средств</option>
			<option value="2">Получение выплаты</option>
			{{-- <option></option> --}}
		</select></td>
		<td><textarea name="comment" class="form-control"></textarea></td>
		<td><input type="date" name="datetime" class="form-control"></td>
	</tr>
</table>
</div>
<input type="submit" class="btn btn-primary" value="Добавить операцию" /> 
</form>
</div>
<div class="row">
{{-- @include('includes.formerror') --}}
</div>

	
</div>
@stop 