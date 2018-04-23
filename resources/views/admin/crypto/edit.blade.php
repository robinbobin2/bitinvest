@extends('layouts.admin')




@section('content')
<div class="row">
<h1>Редактировать криптовалюту</h1>
@if(Session::has('updated_crypto')) 
<div class="col-lg-12">
<p class="bg-success">{{session('updated_crypto')}}</p>
</div>
@endif
<form method="post" class="row" action="{{route('crypto.update', $crypto->id)}}" style="width: 100%;">
    {{ csrf_field() }}
    {{ method_field('patch') }}
    <div class="col-lg-10">

    
    <label for="name">Имя</label>
    <input type="text" class="form-control"  id="name" name="name" value="{{$crypto->name}}"  />
    <label for="symbol">Трёхбуквенное обозначение</label>
    <input type="text" class="form-control" id="symbol" value="{{$crypto->symbol}}" name="symbol" />
    <label for="year">Год</label>
    <input type="text" class="form-control" id="year" name="year" value="{{$crypto->year}}"  />
    <label for="algo">Алгоритм</label>
    <input type="text" class="form-control" id="algo" name="algo" value="{{$crypto->algo}}"  />
    <label for="desc">Описание</label>
    <textarea class="summernote" name="desc">{{$crypto->desc}}</textarea>
    <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Редактировать</button>
</div>

</form>

<form style="margin-top: 20px;" method="post" class="row" action="{{route('crypto.destroy', $crypto->id)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить криптовалюту" class="btn btn-danger pull-right col-sm-12">
</form>
</div>
<div class="row">

</div>
@endsection