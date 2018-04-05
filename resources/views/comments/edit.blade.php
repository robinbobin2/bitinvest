@extends('layouts.admin')




@section('content')
<div class="row">
<h1>Редактировать комментарий</h1>
@if(Session::has('updated_comment')) 
<div class="col-lg-12">
<p class="bg-success">{{session('updated_comment')}}</p>
</div>
@endif
<form method="post" style="width:100%" action="{{route('comments.update', $comment->id)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('patch') }}
    <div class="col-lg-12">
    <label for="body">Текст</label>
    <textarea name="body" id="body" class="form-control" rows="3" cols="3">{{$comment->body}}</textarea>
    
    <input type="submit" name="" value="Редактировать" class="btn btn-success">
</div>
</form>

</div>
<form style="margin-top: 20px;" method="post" class="row" action="{{route('comments.destroy', $comment->id)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить комментарий" class="btn btn-danger pull-right col-sm-6">
</form>
</div>
<div class="row">

</div>
@endsection