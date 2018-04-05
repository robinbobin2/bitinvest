@extends('layouts.app') 

@section('content')
<div class="container">

        <script type="text/javascript" src="{{ asset('charting_library/charting_library.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('datafeeds/udf/dist/polyfills.js') }}"></script>
        <script type="text/javascript" src="{{ asset('datafeeds/udf/dist/bundle.js') }}"></script>

        <script type="text/javascript">

            function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                        results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            TradingView.onready(function()
            {
                var widget = window.tvWidget = new TradingView.widget({
                    // debug: true, // uncomment this line to see Library errors and warnings in the console
                    fullscreen: true,
                    symbols: ["MSFT", "AAPL", "FB", "GOOG"],
                    interval: 'D',
                    container_id: "tv_chart_container",
                    //  BEWARE: no trailing slash is expected in feed URL
                    datafeed: new Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
                    library_path: "charting_library/",
                    locale: getParameterByName('lang') || "ru",
                    //  Regression Trend-related functionality is not implemented yet, so it's hidden for a while
                    drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
                    disabled_features: ["use_localstorage_for_settings"],
                    enabled_features: ["study_templates"],
                    charts_storage_url: 'http://saveload.tradingview.com',
                    charts_storage_api_version: "1.1",
                    client_id: 'tradingview.com',
                    user_id: 'public_user_id'
                });
            });

        </script>

    </head>

       <div id="tv_chart_container"></div>

@if(Auth::check())
       <h4>Оставить комментарий:</h4>
       <div class="container">
        <div class="row">
@if(Session::has('comment_message')) 
                <div class="col-lg-12">{{session('comment_message')}}</div>
                @endif
        <form class="col-lg-8" method="post" action="{{route('comments.store')}}">
            {{ csrf_field() }}
    {{ method_field('post') }}
                    <input type="hidden" name="post_id" value="1">
                        <div class="form-group">
                        <label for="body">Текст</label>
                        <textarea class="form-control" rows="3" cols="13" id="body" name="body"></textarea>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Отправить сообщение">
        </form>
@endif

<!-- Posted Comments -->
                @if(count($comments) > 0)
                @foreach($comments as $comment)
                <!-- Comment -->
                <div class="col-lg-12" style="margin-top:20px;">
                    <a href="{{route("comments.edit", $comment->id)}}">Редактировать</a>
                    <form method="post" class="row" action="{{route('comments.destroy', $comment->id)}}"  enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('delete') }}
    <input type="submit" name="" value="Удалить комментарий" class="btn btn-danger btn-xs ">
</form>
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" height="64" src="{{$comment->photo ? $comment->photo : 'http://placehold.it/64x64' }}" alt="">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">{{$comment->author}}
                            <small>{{$comment->created_at->diffForHumans()}}</small>
                        </h4>
                        <p>{{$comment->body}}</p>
                        </div>
                    </div>
                </div>
                @endforeach
                @endif
</div>
</div>
</div>
@endsection
