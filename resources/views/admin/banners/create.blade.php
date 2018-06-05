@extends('layouts.admin')



@section('content')
<h1>Создать баннер</h1>

<div class="col-lg-12">
  <form enctype="multipart/form-data" method="post" class="col-lg-10" action="{{route('mining.store')}}" >
	<div class="row"> 
    

{{csrf_field()}}
<div class="form-group">
<label for="name">Название</label> 
<input type="text" value="" name="name" id="name" class="form-control">
</div>
<div class="form-group">
                            <label for="cat_id" class="control-label">Категория</label>

                                    @foreach($front as $item)
                                       <label> <input type="checkbox" name="{{$item->id}}"> {{$item->name}}</label>
                                    @endforeach
</div>


</div>
<input type="submit" class="btn btn-primary" value="Создать баннер" /> 
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