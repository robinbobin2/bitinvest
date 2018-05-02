<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  {{--   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> --}}
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
    

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.6.4/summernote.css" rel="stylesheet">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Bitinvest</title>

    <!-- Styles -->
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    Bitinvest Admin Panel
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li><a class="nav-link" href="{{ route('login') }}">Войти</a></li>
                            <li><a class="nav-link" href="{{ route('register') }}">Зарегистрироваться</a></li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Выйти
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <ul>
                            <li><a href="{{route('users.index')}}">Все пользователи</a></li>
                            <hr>
                            <li><a href="{{route('crypto.index')}}">Все криптовалюты</a></li>
                            <li><a href="/news">Все новости</a></li>
                            <li><a href="{{route('analytics.index')}}">Все аналитика</a></li>
                            <li><a href="{{route('interview.index')}}">Все интервью</a></li>
                            <li><a href="{{route('review.index')}}">Все обзоры</a></li>
                            <hr>
                            <li><a href="{{route('categories.index')}}">Все категории</a></li>
                            <li><a href="{{route('mining.index')}}">Облачный майнинг</a></li>
                            <li><a href="{{route('icoproject.index')}}">ICO проекты</a></li>

                        </ul>
                    </div>
                    <div class="col-lg-9">
            @yield('content')
        </div>
        </main>
    </div>
    <div class="modal" id="login" tabindex="-1" role="dialog">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Войти</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Адрес</label>

                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Пароль</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Запомнить меня
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <input type="submt" value="Войти" class="btn btn-primary">

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Забыли пароль?
                                </a>
                            </div>
                        </div>
                    </form>
                              </div>
                            </div>
                          </div>
                        </div>
        <div class="modal" id="register" tabindex="-1" role="dialog">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Зарегистрироваться</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                              <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Имя</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Адрес</label>

                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Пароль</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Подтвердить пароль</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <input type="submit" value="Зарегистрироваться" class="btn btn-primary">

                            </div>
                            
                        </div>
                        <div class="form-group row">
                            

                            <div class="col-md-6">
                                <a class="btn btn-link" href=""  data-dismiss="modal" data-toggle="modal" data-target="#login">
                                    У меня уже есть аккаунт
                                </a>
                            </div>
                        </div>
                    </form>
                              </div>
                            </div>
                          </div>
                        </div>

    <!-- Scripts -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.6.4/summernote.min.js"></script>
    <script>
$(document).ready(function(){

    // Define function to open filemanager window
    var lfm = function(options, cb) {
        var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';
        window.open(route_prefix + '?type=' + options.type || 'file', 'FileManager', 'width=900,height=600');
        window.SetUrl = cb;
    };
    var blockQuoteButton = function (context) {
    var ui = $.summernote.ui;
    var button = ui.button({
      className: 'note-btn-blockquote',
      contents: 'Цитата',
      tooltip: 'Цитата',
      click: function () {
        context.invoke('editor.formatBlock', 'blockquote')
        }
      });

     return button.render();   // return button as jquery object 
     }
    // Define LFM summernote button
    var LFMButton = function(context) {
        var ui = $.summernote.ui;
        var button = ui.button({
            contents: '<i class="note-icon-picture"></i> ',
            tooltip: 'Insert image with filemanager',
            click: function() {
        
                lfm({type: 'image', prefix: '/file-manager'}, function(url, path) {
                    context.invoke('insertImage', url);
                });

            }
        });
        return button.render();
    };
    
    // Initialize summernote with LFM button in the popover button group
    // Please note that you can add this button to any other button group you'd like
    $('.summernote').summernote({
       height: ($(window).height() - 250),
        focus: false,
        toolbar: [

        ['style', ['bold', 'italic', 'underline', 'clear', 'quote']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
    ['insert', ['picture']]
            ],

        oninit: function() {
            // Add "open" - "save" buttons
            var noteBtn = '<button id="makeSnote" type="button" class="btn btn-default btn-sm btn-small" title="Identify a music note" data-event="something" tabindex="-1"><i class="fa fa-music"></i></button>';            
            var fileGroup = '<div class="note-file btn-group">' + noteBtn + '</div>';
            $(fileGroup).appendTo($('.note-toolbar'));
            // Button tooltips
            $('#makeSnote').tooltip({container: 'body', placement: 'bottom'});
            // Button events
            $('#makeSnote').click(function(event) {
                var highlight = window.getSelection(),  
                    spn = document.createElement('div'),
                    range = highlight.getRangeAt(0)
                spn.innerHTML = '<img src="img/quote-left.png" alt="" class="quote-left">';
                spn.innerHTML += highlight;
                spn.style.border = '3px solid #e5e5e5';
                spn.style.padding = '35px';
                spn.style.marginBottom = '25px';
                spn.style.textAlign= 'center';
                spn.style.fontSize= '24px';
                spn.style.color= '#000';
                spn.style.lineHeight= '28px';
                spn.innerHTML += '<img src="img/quote-right.png" alt="" class="quote-right">';
                spn.className = 'blockquote-block';  
            
                range.deleteContents();
                range.insertNode(spn);
            });
         },

        
    });
        function sendFile(file, editor, welEditable) {
            data = new FormData();
            data.append("file", file);
            $.ajax({
                data: data,
                type: "POST",
                url: "Your URL POST (php)",
                cache: false,
                contentType: false,
                processData: false,
                success: function(url) {
                    editor.insertImage(welEditable, url);
                }
            });
        }
});
</script>
    {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
</body>
</html>
