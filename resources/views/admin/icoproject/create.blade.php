@extends('layouts.admin')



@section('content')
<h1>ICO проект создание</h1>

<div class="col-lg-12">
	<div class="row"> 
    <form enctype="multipart/form-data" method="post" class="col-lg-10" action="{{route('icoproject.store')}}" >

{{csrf_field()}}
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="" name="name" id="name" class="form-control">
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
<input type="text" value="" name="website" id="website" class="form-control">


</div>

<div class="form-group">
<label for="about">Описание проекта</label> 

<textarea name="about" id="about" class="summernote">
	
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
<input type="text" value="" name="white_paper" id="white_paper" class="form-control">


</div>

<div class="form-group">
<label for="escrow">
<input value="1" type="checkbox" name="escrow" id="escrow">
Есть Escrow</label> 


</div>

<div class="form-group">
<label for="platform">Платформа</label> 
<input type="text" value="" name="platform" id="platform" class="form-control">
</div>

<div class="form-group">
<label for="currencies">Криптовалюты</label> 
<input type="text" value="" name="currencies" id="currencies" class="form-control">
</div>

<div class="form-group">
<label for="place">Местоположение </label> 
<input type="text" value="" name="place" id="place" class="form-control">
</div>

<div class="form-group">
<label for="money">Сколько денег надо собрать </label> 
<input type="text" value="" name="money" id="money" class="form-control">
</div>

<div class="form-group">
<label for="money_start">Начало сбора </label> 
<input type="date" value="" name="money_start" id="money_start" class="form-control">
</div>

<div class="form-group">
<label for="money_end">Конец сбора </label> 
<input type="date" value="" name="money_end" id="money_end" class="form-control">
</div>

<div class="form-group">
<label for="current_money">Текущее количество собранных денег</label> 
<input type="text" value="" name="current_money" id="current_money" class="form-control">
</div>

<div class="form-group">
<label for="number_people">Количество человек, участвующих в проекте</label> 
<input type="number" value="" name="number_people" id="number_people" class="form-control">
</div>


</div>
<input type="submit" class="btn btn-primary" value="Создать проект" /> 
</form>
</div>
<div class="row">
{{-- @include('includes.formerror') --}}
</div>

	
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