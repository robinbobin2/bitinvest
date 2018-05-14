@extends('layouts.admin')




@section('content')
<div class="row">
<h1>Редактировать криптовалюту</h1>
@if(Session::has('updated_crypto')) 
<div class="col-lg-12">
<p class="bg-success">{{session('updated_crypto')}}</p>
</div>
@endif
<form enctype="multipart/form-data"  method="post" class="row" action="{{route('crypto.update', $crypto->id)}}" style="width: 100%;">
    {{ csrf_field() }}
    {{ method_field('patch') }}
    <div class="col-lg-10">
    @if($crypto->logo)
    <img src="{{$crypto->logo}}" style="max-width: 50px;">
    @endif
    <label for="name">Имя</label>
    <input type="text" class="form-control"  id="name" name="name" value="{{$crypto->name}}"  />
    <label for="symbol">Трёхбуквенное обозначение</label>
    <input type="text" class="form-control" id="symbol" value="{{$crypto->symbol}}" name="symbol" />
    <label for="year">Год</label>
    <input type="text" class="form-control" id="year" name="year" value="{{$crypto->year}}"  />
    <label for="logo">Лого</label>
    <input type="file" class="form-control" id="logo" name="logo" />
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
<div class="col-md-12 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Добавить категории</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{route('crypto.updateCats', $crypto)}}"  enctype="multipart/form-data">
                        {{ csrf_field() }}
                        {{ method_field('patch') }}
                        <div ></div>
                        
                    </div>
                    
                    <ul>
                        @foreach($categories as $cat)
                        <li>
                            <label>
                                <input type="checkbox" name="categories[]" value="{{$cat->id}}">
                                {{$cat->name}}
                            </label>
                        </li>
                        @endforeach
                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Добавить
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
 <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.css" rel="stylesheet">

        <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.4/summernote.js"></script>
        <script type="text/javascript">
        $(document).ready(function() {
            $('.summernote').summernote({
               height: 200,
            });
        });
    </script>
@endsection