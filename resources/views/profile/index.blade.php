@extends('layouts.app') 
<?php


$cryptocompareApi = new Cryptocompare\CryptocompareApi();
$example1 = $cryptocompareApi->getAvailableCalls();
// print_r($example1);

$cryptocomparePrice = new Cryptocompare\Price();
$example2 = $cryptocomparePrice->getSinglePrice("1","BTC","USD","CCCAGG","false");
// print_r($example2);


$cryptocompareCoin = new Cryptocompare\Coin();
$example3 = $cryptocompareCoin->getList();
print_r($example3);
?>
@section('content')
{{$example1}}
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2>{{ $user->name }}</h2>
            <h4>{{ $user->email }}</h4>
            <a href="{{route('profile.edit', $user)}}">Редактировать профиль</a>
            <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Выйти
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
        </div>
    </div>

        <div class="row justify-content-center">
        <div class="col-md-8">
            @foreach($portfolio_types as $portfolio_type)
                <h2>{{$portfolio_type->name}}</h2>
                @foreach($portfolio_type->portfolios->where('user_id', $user->id) as $port)
                    <h3>{{$port->name}}</h3>

                    @foreach($port->minings as $mining)
                        <h4>{{$mining->name}}</h4>

                    @endforeach

                @endforeach
            @endforeach
        </div>
    </div>
</div>
@endsection


