@extends('layouts.admin')



@section('content')
<h1>Облачный майнинг создание</h1>

<div class="col-lg-12">
	<div class="row"> 
    <form enctype="multipart/form-data" method="post" class="col-lg-10" action="{{route('mining.store')}}" >

{{csrf_field()}}
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="" name="name" id="name" class="form-control">
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
<label for="start">Дата запуска</label> 
<input type="text" value="" name="start" id="start" class="form-control">


</div>

<div class="form-group">
<label for="lang">Язык сервиса</label> 
<input type="text" value="" name="lang" id="lang" class="form-control">


</div>

<div class="form-group">
<label for="website">Сайт сервиса</label> 
<input type="text" value="" name="website" id="website" class="form-control">


</div>

<div class="form-group">
<label for="website">Описание сервиса</label> 
<textarea name="desc" class="form-control"></textarea>


</div>

<div class="form-group">
<label for="logo">Логотип</label> 
<input type="file" name="logo" id="logo">


</div>



<div class="form-group">
<label for="proc">Годовой процент доходности</label> 
<input type="text" value="" name="proc" id="proc" class="form-control">


</div>
<div class="form-group">
<label for="depo">Депозит (если есть)</label> 
<input type="text" value="" name="depo" id="depo" class="form-control">


</div>

<div class="form-group">
<label for="depo">Дата депозита</label> 
<input type="text" value="" name="depo_date" id="depo_date" class="form-control">


</div>

{{-- <div class="form-group">
<label for="recieved">Получено (указывается процент возврата средств)</label> 
<input type="text" value="" name="recieved" id="recieved" class="form-control">


</div> --}}


<div class="form-group">
<label for="ref"><input type="checkbox" value="1" name="ref" id="ref" class=""> Реферальная система</label> 

</div>

<div class="form-group">
<label for="status">Статус</label> 
<select name="status"  class="form-control">
  <option value="1">Платит</option>
  <option value="2">Ожидает выплаты</option>
  <option value="3">Не платит</option>
</select>


</div>

<div class="form-group">
<label for="is_top">Топ бирж</label> 
<select name="is_top"  class="form-control">
  <option value="1">Да</option>
  <option value="0">Нет</option>
</select>


</div>
<input type="submit" class="btn btn-primary" value="Создать категорию" /> 
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