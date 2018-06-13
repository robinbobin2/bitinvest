@extends('layouts.admin')

@section('content')
{{-- @include('includes.tinyeditor') --}}
<div class="container">
    <div class="row">
        <div class="col-md-12 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Редактировать биржи</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{route('exchanges.update', $stock)}}"  enctype="multipart/form-data">
                        {{ csrf_field() }}
                        {{ method_field('patch') }}
                        <div ></div>
                        
                    </div>
                    <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Название</label>

                            <div class="col-md-12">
                                <input value="{{$stock->name}}" id="name" type="text" class="form-control" name="name" autofocus>

                               
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="website" class="col-md-4 control-label">Сайт</label>

                            <div class="col-md-12">
                                <input id="website" type="text" value="{{$stock->website}}" class="form-control" name="website" autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="country" class="col-md-4 control-label">Страна</label>

                            <div class="col-md-12">
                                <input id="country" type="text" value="{{$stock->country}}" class="form-control" name="country" autofocus>

                              
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="year" class="col-md-4 control-label">Год</label>

                            <div class="col-md-12">
                                <input id="year" type="text" value="{{$stock->year}}" class="form-control" name="year" autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exchange" class="col-md-4 control-label">Способы вывода</label>

                            <div class="col-md-12">
                                <input id="exchange" value="{{$stock->exchange}}" type="text" class="form-control" name="exchange" autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="languages" class="col-md-4 control-label">Языки</label>

                            <div class="col-md-12">
                                <input id="languages" type="text" value="{{$stock->languages}}" class="form-control" name="languages" autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="logo" class="col-md-4 control-label">Лого</label>

                            <div class="col-md-12">
                                <input id="logo" type="file" class="form-control" name="logo" autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="ref" class="col-md-4 control-label">Реферальная программа</label>

                            <div class="col-md-12">
                                <input id="ref" type="text" value="{{$stock->ref}}" class="form-control" name="ref" autofocus>

                              
                            </div>
                        </div>
                    <div class="form-group">
                            <label for="desc" class="col-md-4 control-label">Описание</label>

                            <div class="col-md-12">
                                <textarea class="form-control summernote" name="desc">
                                    {{$stock->desc}}
                                </textarea>
                                
                            </div>
                    </div>
                    
                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Редактировать
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
                                <input type="checkbox" name="coins[]" value="{{$coin->id}}" 
                                @if( count($stock->coins->where('id', $coin->id)) )
                                    checked="checked"
                               @endif />
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
                                <input type="checkbox" name="categories[]" value="{{$cat->id}}"
                                @if( count($stock->categories->where('id', $cat->id)) )
                                    checked="checked"
                               @endif
                               >
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
