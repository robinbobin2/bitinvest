@extends('layouts.admin')

@section('content')
{{-- @include('includes.tinyeditor') --}}
<div class="container">
    <div class="row">
        <div class="col-md-12 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Добавить</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="/admin/exchanges" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <div ></div>
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Название</label>

                            <div class="col-md-12">
                                <input id="name" type="text" class="form-control" name="name" required autofocus>

                                @if ($errors->has('title'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('title') }}</strong>
                                </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="website" class="col-md-4 control-label">Сайт</label>

                            <div class="col-md-12">
                                <input id="website" type="text" class="form-control" name="website" required autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="country" class="col-md-4 control-label">Страна</label>

                            <div class="col-md-12">
                                <input id="country" type="text" class="form-control" name="country" required autofocus>

                              
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="year" class="col-md-4 control-label">Год</label>

                            <div class="col-md-12">
                                <input id="year" type="text" class="form-control" name="year" required autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exchange" class="col-md-4 control-label">Способы вывода</label>

                            <div class="col-md-12">
                                <input id="exchange" type="text" class="form-control" name="exchange" required autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="languages" class="col-md-4 control-label">Языки</label>

                            <div class="col-md-12">
                                <input id="languages" type="text" class="form-control" name="languages" required autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="logo" class="col-md-4 control-label">Лого</label>

                            <div class="col-md-12">
                                <input id="logo" type="file" class="form-control" name="logo" required autofocus>

                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="ref" class="col-md-4 control-label">Реферальная программа</label>

                            <div class="col-md-12">
                                <input id="ref" type="text" class="form-control" name="ref" required autofocus>

                              
                            </div>
                        </div>
                        
                <textarea class="form-control summernote" name="desc"></textarea>
                <div class="form-group">
                    <div class="col-md-8 col-md-offset-4">
                        <button type="submit" class="btn btn-primary">
                            Add
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
