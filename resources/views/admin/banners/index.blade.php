@extends('layouts.admin')

@section('content')
@if(Session::has('message'))
                        <div class="alert alert-success">
                            <strong>{{Session::get('message')}}</strong>
                        </div>
                @endif
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3>Баннеры</h3>
             <div style="float:right"><a href="{{route('banner.create')}}">Добавить</a></div></div>

                <div class="panel-body">
                <table id="table_id" String class="display" String>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        @foreach($banners as $n)
                          <tr>
                              <td><img src="{{$n->file}}" width="100" /></td>
                              <td>
                                  <a href="{{route('banner.edit', $n->id)}}">Редактировать</a> | 
                                  <form method="post" action="{{route('banner.destroy', $n->id)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить" class="btn btn-danger ">
</form>
                                  

                              </td>
                          </tr>
                        @endforeach
                      </tbody>
                  </table>
            </div>
        </div>
        </div>
        </div>
    </div>
</div>
@push('styles')
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
@endpush
@push('scripts')
<script src="//cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
<script type="text/javascript">
        //****************************
        //Pagination controls
        $(table_id).DataTable();

        //name a pagination region
        $(table_id_paginate).attr("role", "region").attr("aria-label", "pagination");

        //add role to controls - this can be done using native HTML or ARIA roles
        $(".paginate_button").attr("href", "#");

        //add context to page buttons -- Note the spacing before and after the word "page" as it is necessary to ensure that the words are announced separately
        $(".previous, .next").append("<span class='sr-only'> Page</span>");
        $(".paginate_button:not('.previous, .next')").prepend("<span class='sr-only'>Page </span>");

        //Disable prev/next button and remove from tab order, this must be removed when the button is no longer disabled
        $(".paginate_button.disabled").attr("aria-disabled", "true").attr("tabindex", "-1");

        //****************************
        //Calendar labels
        $( ".ui-datepicker-month" ).attr("aria-label", "Month");
        $( ".ui-datepicker-year" ).attr("aria-label", "Year");
    </script>
@endpush  
@endsection
