@extends('layouts.admin')


@section('content')

@if(Session::has('crypto_add')) 

<p class="bg-danger">{{session('crypto_add')}}</p>
@endif
<h1>Добавить криптовалюту</h1>

<form method="post" class="row" action="{{route('crypto.store')}}" >
    {{ csrf_field() }}
    {{ method_field('post') }}
    <div class="col-lg-10">

    
    <label for="name">Имя</label>
    <input type="text" class="form-control"  id="name" name="name"   />
    <label for="symbol">Трёхбуквенное обозначение</label>
    <input type="text" class="form-control" id="symbol" name="symbol" />
    <label for="year">Год</label>
    <input type="text" class="form-control" id="year" name="year" />
    <label for="algo">Алгоритм</label>
    <input type="text" class="form-control" id="algo" name="algo" />
    <label for="desc">Описание</label>
    <textarea class="summernote" name="desc"></textarea>
    <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Добавить</button>
</div>

</form>
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