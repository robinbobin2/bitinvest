@extends('layouts.admin')



@section('content')
<div class="col-sm-6">
	<div class="row"> 
		<form method="post" action="{{route('categories.update', $category)}}" >

{{csrf_field()}}
{{ method_field('patch') }}
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="{{$category->name}}" name="name" id="name">
</div>
<input type="submit" class="btn btn-primary" value="Обновить категорию" /> 
</form>

</div>
<div class="row">
{{-- @include('includes.formerror') --}}
</div>

	
</div>
<div class="col-sm-6">
<form style="margin-top: 20px;" method="post" class="row" action="{{route('categories.destroy', $category)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить категорию" class="btn btn-danger pull-right col-sm-6">
</form>

</div>
@stop 