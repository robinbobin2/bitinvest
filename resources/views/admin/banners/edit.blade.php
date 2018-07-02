@extends('layouts.admin')



@section('content')
<h1>Редактировать баннер</h1>

<div class="col-lg-12">
  <form enctype="multipart/form-data" method="post" class="col-lg-10" action="{{route('banner.update', $banner)}}" >
	<div class="row"> 
    

{{csrf_field()}}
<div class="form-group col-lg-12">
  <div >
    <img src="{{$banner->file}}">
  </div>
<label for="name">Название</label> 
<input type="file" name="file" id="file" class="form-control" {{$banner->name}}>
</div>
<div class="form-group col-lg-12">
<label for="start_date">Дата начала</label> 
<input type="date" name="start_date" value="{{$banner->start_date}}" id="start_date" class="form-control">
</div>
<hr>
<div class="form-group col-lg-12">
<label for="start_date">Дата окончания</label> 
<input type="date" name="end_date" id="end_date" value="{{$banner->end_date}}" class="form-control">
</div>
<hr>
<div class="form-group col-lg-12">
                           <h2>Где отображать</h2>

                                    @foreach($front as $item)
                                       <label> <input type="checkbox" name="front[]"
                                @if( count($banner->frontends->where('id', $item->id)) )
                                    checked="checked"
                               @endif
                                        value="{{$item->id}}"> {{$item->name}}</label><br>
                                    @endforeach
</div>


</div>
<input type="submit" class="btn btn-primary" value="Редактировать баннер" /> 
</form>
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