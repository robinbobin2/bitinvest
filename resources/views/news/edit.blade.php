@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Edit News</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="/news/{{$news->id}}" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <input type="hidden" name="_method" value="PUT">

                        <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                            <label for="title" class="col-md-4 control-label">Title</label>
                            <div class="col-md-12">
                                <input id="title" type="text" class="form-control" name="title" value="{{ $news->title }}" required autofocus>

                                @if ($errors->has('title'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('title') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('desc') ? ' has-error' : '' }}">
                            <label for="desc" class="col-md-4 control-label">Description</label>

                            <div class="col-md-12">
                                <textarea class="form-control summernote" name="desc">@if(old('desc')) {{ old('desc') }} @else {{ $news->desc }} @endif</textarea>
                                @if ($errors->has('desc'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('desc') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('cat_id') ? ' has-error' : '' }}">
                            <label for="cat_id" class="col-md-4 control-label">Category</label>

                            <div class="col-md-12">
                                  <select class="form-control" name="cat_id" id="cat_id">
                                    @foreach($categories as $cat)
                                        <option @if(old('cat_id') && old('cat_id') == $cat->id) selected @elseif($cat->id == $news->cat_id) selected @endif value="{{$cat->id}}">{{$cat->name}}</option>
                                    @endforeach
                                  </select>

                                @if ($errors->has('cat_id'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('cat_id') }}</strong>
                                    </span>
                                @endif
                            </div>
                            </div>

                        <div class="form-group{{ $errors->has('main') ? ' has-error' : '' }}">
                            <label for="main" class="col-md-4 control-label">Главная</label>
                            <div class="col-md-12">
                                <select class="form-control" name="main" id="main">
                                    <option @if($news->main == '0') selected="selected" @endif value="0">Нет</option>
                                    <option @if($news->main == '1') selected="selected  @endif value="1">Да</option>
                                </select>
                                @if ($errors->has('main'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('main') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label  class="col-md-4 control-label">Upload Image</label>

                            <div class="col-md-12">
                                <input type="file" class="form-control" name="image" multiple="multiple">
                            </div>
                        </div>
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
        
        <div class="col-md-4">
            <img style="max-width: 100%;" src="{{$photo[0]->file}}">
        </div>
    </div>
</div>

@endsection
