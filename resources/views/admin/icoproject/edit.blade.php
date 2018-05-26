@extends('layouts.admin')



@section('content')
<h1>{{$icoproject->name}} редактирование</h1>
<img src="{{$icoproject->logo ? $icoproject->logo : 'http://placehold.it/100x100'}}" width="100" class="img-responsive img-rounded">
<div class="col-lg-12">
	<div class="row"> 
    <form  enctype="multipart/form-data"  class="col-lg-10" method="post" action="{{route('icoproject.update', $icoproject)}}" >

{{-- <div class="progress" style="margin: 0 0 15px">

  <div class="progress-bar bg-danger" role="progressbar" style="width: {{$percentage}}%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><strong>{{$percentage}}%</strong></div>
</div> --}}
{{csrf_field()}}
{{ method_field('patch') }}
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="{{$icoproject->name}}" name="name" id="name" class="form-control">
</div>

<div class="form-group">
<label for="logo">Логотип</label> 
<input type="file" name="logo" id="logo">


</div>

<div class="form-group{{ $errors->has('cat_id') ? ' has-error' : '' }}">
                            <label for="cat_id" class="control-label">Категория</label>

                                  <select class="form-control" name="cat_id" id="cat_id">
                                    @foreach($categories as $cat)
                                        <option @if(old('cat_id')) selected  @endif value="{{$cat->id}}">{{$cat->name}}</option>
                                    @endforeach
                                  </select>

                                @if ($errors->has('cat_id'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('cat_id') }}</strong>
                                    </span>
                                @endif
                        </div>

<div class="form-group">
<label for="status">Статус проекта</label> 
<select name="status" id="status" class="form-control">
	<option value="1">Активен</option>
	<option value="2">Завершен</option>
</select>
</div>
<div class="form-group">
<label for="website">Веб-сайт проекта</label> 
<input type="text" value="{{$icoproject->website}}" name="website" id="website" class="form-control">


</div>

<div class="form-group">
<label for="about">Описание проекта</label> 

<textarea name="about" id="about" class="summernote">
	{{$icoproject->about}}
</textarea>

</div>

<div class="form-group">
<label for="type">Тип ICO</label> 

<select name="type" id="type" class="form-control">
	<option value="1">ICO</option>
	<option value="2">preICO</option>
</select>

</div>

<div class="form-group">
<label for="white_paper">White paper</label> 
<input type="text" value="{{$icoproject->white_paper}}" name="white_paper" id="white_paper" class="form-control">


</div>

<div class="form-group">
<label for="escrow">
<input value="1" type="checkbox" name="escrow" id="escrow">
Есть Escrow</label> 


</div>

<div class="form-group">
<label for="aim">Цель сбора средств</label> 
 <textarea name="aim" id="aim" class="summernote">{{$icoproject->aim}}</textarea>
</div>


<div class="form-group">
<label for="platform">Платформа</label> 
<input type="text" value="{{$icoproject->platform}}" name="platform" id="platform" class="form-control">
</div>

<div class="form-group">
<label for="currencies">Криптовалюты</label> 
<input type="text" value="{{$icoproject->currencies}}" name="currencies" id="currencies" class="form-control">
</div>

<div class="form-group">
<label for="place">Местоположение </label> 
<input type="text" value="{{$icoproject->place}}" name="place" id="place" class="form-control">
</div>

<div class="form-group">
<label for="money">Сколько денег надо собрать </label> 
<input type="text" value="{{$icoproject->money}}" name="money" id="money" class="form-control">
</div>

<div class="form-group">
<label for="money_start">Начало сбора </label> 
<input type="date" value="{{$icoproject->money_start}}" name="money_start" id="money_start" class="form-control">
</div>

<div class="form-group">
<label for="money_end">Конец сбора </label> 
<input type="date" value="{{$icoproject->money_end}}" name="money_end" id="money_end" class="form-control">
</div>

<div class="form-group">
<label for="current_money">Текущее количество собранных денег</label> 
<input type="text" value="{{$icoproject->current_money}}" name="current_money" id="current_money" class="form-control">
</div>

<div class="form-group">
<label for="number_people">Количество человек, участвующих в проекте</label> 
<input type="number" value="{{$icoproject->number_people}}" name="number_people" id="number_people" class="form-control">
</div>


</div>
<input type="submit" class="btn btn-primary" value="Редактировать проект" /> 
</form>
<form  enctype="multipart/form-data" method="post" class="col-lg-12" style="margin-top: 20px;" action="{{route('icoproject.updateteam', $icoproject)}}" >

{{csrf_field()}}
{{ method_field('post') }}
<div class="form-group">
<h3>Команда</h3>
<table class="table table-striped">
	<tr>
		<td>Фото</td>
		<td>Имя</td>
		<td>Место работы</td>
	</tr>
	@foreach($team as $item)
	<tr>
		
		<td><img src="{{$item->photo ? $item->photo : 'http://placehold.it/100x100'}}" class="img-responsive img-rounded" width="50"></td>
		<td>{{$item->name}}</td>
		<td>{{$item->workplace}}</td>
	</tr>
	@endforeach
	<tr>
		<td><input type="file" name="photo"></td>
		<td><input type="text" name="name" class="form-control"></td>
		<td><input type="text" name="workplace" class="form-control"></td>
	</tr>
</table>
</div>
<input type="submit" class="btn btn-primary" value="Добавить операцию" /> 
</form>



<form  enctype="multipart/form-data" method="post" class="col-lg-12" style="margin-top: 20px;" action="{{route('icoproject.updatemap', $icoproject)}}" >

{{csrf_field()}}
{{ method_field('post') }}
<div class="form-group">
	<h3>Развитие</h3>
<table class="table table-striped">
	<tr>
		<td>Дата</td>
		<td>Описание</td>
	</tr>
	@foreach($roadmap as $item)
	<tr>
		
		
		<td>{{$item->date}}</td>
		<td>{{$item->desc}}</td>
	</tr>
	@endforeach
</table>
</div>
<div class="form-group">
<label for="date">Дата</label>
<input class="form-control" name="date" id="date">

<label for="desc">Описание</label>
<textarea name="desc" class="summernote"></textarea>

</div>
<input type="submit" class="btn btn-primary" value="Добавить операцию" /> 
</form>

<form  enctype="multipart/form-data" method="post" class="col-lg-12" style="margin-top: 20px;" action="{{route('icoproject.updatepercent', $icoproject)}}" >

{{csrf_field()}}
{{ method_field('post') }}
<div class="form-group">
	<h3>Проценты</h3>
<table class="table table-striped">
	<tr>
		<td>Процент</td>
		<td>Описание</td>
	</tr>
	@if($percent)
	@foreach($percent as $item)
	<tr>
		
		
		<td>{{$item->percent}}</td>
		<td>{{$item->name}}</td>
	</tr>
	@endforeach
	@endif
</table>
</div>
<div class="form-group">
<label for="percent">Процент</label>
<input class="form-control" name="percent" id="percent">

<label for="name">Описание</label>
<textarea name="name" class="form-control"></textarea>

</div>
<input type="submit" class="btn btn-primary" value="Добавить процент" /> 
</form>

</div>
<div class="row">
{{-- @include('includes.formerror') --}}
</div>
<form style="margin-top: 20px;" method="post" class="row" action="{{route('icoproject.destroy', $icoproject)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить ICO проект" class="btn btn-danger pull-right col-sm-6">
</form>
	
</div>
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.css" rel="stylesheet">

        <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.js"></script>
        <script type="text/javascript">
        $(document).ready(function() {
            $('.summernote').summernote({
               height: 300,
            });
        });
    </script>
@stop 