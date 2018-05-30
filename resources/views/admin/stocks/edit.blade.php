@extends('layouts.admin')

@section('content')
{{-- @include('includes.tinyeditor') --}}
<div class="container">
    <div class="row">
        <div class="col-md-12 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Добавить монеты</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{route('exchanges.update', $stock)}}"  enctype="multipart/form-data">
                        {{ csrf_field() }}
                        {{ method_field('patch') }}
                        <div ></div>
                        
                    </div>
                    
                    <ul>
                        @foreach($coins as $coin)
                        <li>
                            <label>
                                @if()
                                <input type="checkbox" name="coins[]" value="{{$coin->id}}">
                                {{$coin->name}}
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
        <div class="col-md-12 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Добавить категории</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{route('exchanges.updateCats', $stock)}}"  enctype="multipart/form-data">
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

@endsection
