<?php

use App\Stock;
use App\User;
use App\UserPortfolioType;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome',  ['as' => 'index',]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/chart',['as' => 'chart.example', 'uses' =>'ChartController@example']);


Route::get('profile/',  ['as' => 'profile.index', 'uses' => 'ProfileController@index']);
// Route::get('profile/{user}',  ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
Route::get('users/raw', function() {
	return User::all();
});
Route::patch('users/{user}/update',  ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
Route::patch('users/{user}/updatepass',  ['as' => 'profile.updatepass', 'uses' => 'ProfileController@updatePassword']);

// RAW

Route::get('/newsraw', 'NewsViewController@index');
Route::get('/analyticsraw/', 'AnalyticsViewController@index');
Route::get('/reviewraw/', 'ReviewViewController@index');
Route::get('/miningraw/', 'CloudMiningViewController@index');
Route::get('/miningraw/search', 'CloudMiningViewController@search');
Route::get('/miningraw/top', 'CloudMiningViewController@topfive');
Route::get('/miningraw/{mining}', 'CloudMiningViewController@show');
Route::get('/miningbycat/{category}', 'CloudMiningViewController@byCat');
Route::get('/icoraw/', 'IcoProjectViewController@index');
Route::get('/icoraw/top', 'IcoProjectViewController@top');
Route::get('/icoraw/{ico}', 'IcoProjectViewController@show');
Route::get('/interviewraw/', 'InterviewViewController@index');
Route::get('/newsraw/{news}', 'NewsViewController@show');
Route::get('/analyticsraw/{analytics}', 'AnalyticsViewController@show');
Route::get('/interviewraw/{analytics}', 'InterviewViewController@show');
Route::get('/reviewraw/{review}', 'ReviewViewController@show');
Route::get('/categoriesraw/{type}', "AdminCategoryController@catRaw");
Route::get('/postsbycat/{category}', "NewsViewController@byCat");
Route::get('/analyticsbycat/{category}', "AnalyticsViewController@byCat");
Route::get('/interviewsbycat/{category}', "InterviewViewController@byCat");
Route::get('/icobycat/{category}', "IcoProjectViewController@byCat");
Route::get('/reviewbycat/{review}', "ReviewViewController@byCat");
Route::get('/allcrypto', "CryptoViewController@viewAll");
Route::get('/allcrypto/{symbol}', "CryptoViewController@viewCrypto");
Route::get('/cryptocompar', "CryptoController@CryptoCompare");


// ENDRAW


Route::group(['middleware'=>'admin'], function() {
	Route::resource('admin/categories', 'AdminCategoryController');
	Route::resource('admin/analytics', 'AnalyticsController');
	Route::resource('admin/interview', 'InterviewController');
	Route::resource('admin/mining', 'CloudMiningController');
	Route::resource('admin/icoproject', 'IcoProjectController');
	Route::resource('admin/exchanges', 'StocksController');
	Route::patch('admin/update/cats/{id}',  ['as' => 'exchanges.updateCats', 'uses' => 'StocksController@updateCats']);
	Route::patch('admin/update/cryptocats/{id}',  ['as' => 'crypto.updateCats', 'uses' => 'AdminCryptoController@updateCats']);

	Route::post('admin/mining/updatehistory/{id}',  ['as' => 'mining.updatehistory', 'uses' => 'CloudMiningController@updateHistory']);
	Route::post('admin/icoproject/updateteam/{id}',  ['as' => 'icoproject.updateteam', 'uses' => 'IcoProjectController@updateTeam']);
	Route::post('admin/icoproject/updatepercent/{id}',  ['as' => 'icoproject.updatepercent', 'uses' => 'IcoProjectController@updatePercent']);
	Route::post('admin/icoproject/updatemap/{id}',  ['as' => 'icoproject.updatemap', 'uses' => 'IcoProjectController@updateMap']);
	Route::resource('admin/review', 'ReviewController');
	Route::get('/admin', function() {


		return view('admin.index');
	});
	Route::resource('admin/users', 'AdminUsersController');
	Route::resource('admin/crypto', 'AdminCryptoController');
});

Route::resource('comments', 'CommentsController');
Route::post('/storecomment', 'CommentsController@storeRaw');
Route::post('/storeportfolio', 'UserPortfolioController@storeRaw');
Route::resource('news', 'AdminNewsController');


// ANGULAR
Route::get('/angular', "AngularController@serve");
Route::get('/posts/all', "AngularController@serve");
Route::get('/posts/post/{post}', "AngularController@serve");
Route::get('/posts/category/{category}', "AngularController@serve");
Route::get('/analytics/all', "AngularController@serve");
Route::get('/analytics/item/{post}', "AngularController@serve");
Route::get('/analytics/category/{category}', "AngularController@serve");
Route::get('/interview/all', "AngularController@serve");
Route::get('/interview/item/{post}', "AngularController@serve");
Route::get('/interview/category/{category}', "AngularController@serve");
Route::get('/review/all', "AngularController@serve");
Route::get('/review/item/{post}', "AngularController@serve");
Route::get('/review/category/{category}', "AngularController@serve");
Route::get('/cloud-mining/all', "AngularController@serve");
Route::get('/cloud-mining/item/{post}', "AngularController@serve");
Route::get('/cloud-mining/category/{category}', "AngularController@serve");
Route::get('/cryptocurrency', "AngularController@serve");
Route::get('/cryptocurrency/cmc', "AngularController@serve");
Route::get('/cryptocurrency/exmo', "AngularController@serve");
Route::get('/cryptocurrency/crypto', "AngularController@serve");
Route::get('/cryptocurrency/all', "AngularController@serve");
Route::get('/exchanges', "AngularController@serve");
Route::get('/exchange/{name}', "AngularController@serve");
Route::get('/ico/all', "AngularController@serve");
Route::get('/ico/item/{post}', "AngularController@serve");
Route::get('/ico/category/{category}', "AngularController@serve");
Route::get('/profile/edit', ['as' => 'profile.edit', 'uses' => "AngularController@serve"]);
Route::get('/profile/portfolio', ['as' => 'profile.portfolio', 'uses' => "AngularController@serve"]);
Route::get('/angular/user/', "AngularController@user");
Route::get('/angular/userportfolio/', "AngularController@portfolio");
Route::get('/angular/userportfolio/remove/{id}', "AngularController@removePortfolio");
Route::get('/angular/userportfolio/ico/remove/{id}', "AngularController@icoRemovePortfolio");
Route::post('/angular/userportfolio/create', "AngularController@createPortfolio");
Route::get('/angular/userportfolio/{id}', "AngularController@byportfolio");
Route::get('/angular/userportfolio/deletecat/{id}', "AngularController@deletePortfolioCat");
Route::get('/angular/funds/{id}', "AngularController@funds");
Route::get('/angular/exchanges/', "AngularController@exchanges");
Route::get('/angular/exchange/{name}', "AngularController@exchange");
Route::get('/angular/search', "AngularController@search");
Route::post('/angular/vote', "AngularController@vote");

// Route::get('/crypto', "AngularController@serve");

Route::get('/crypto/{symbol}', "AngularController@crypto");
Route::get('/bit/', "BitController@index");
Route::get('/bit/exchange/{id}', "BitController@exchange");
Route::get('/bit/pair', "BitController@pair");
Route::get('/bit/pair', "BitController@pair");
Route::get('/bit/volumes', "BitController@exchangesVolume");
Route::get('/bit/info', "BitController@info");
Route::get('/bit/pair/name', "BitController@pairByExchange");
Route::post('/profile/register', "ProfileController@register");
Route::get('/profile/delete/{id}', "ProfileController@delete");
Route::post('/profile/login', "ProfileController@login");
Route::post('/profile/restorepass', "ProfileController@lostPassword");
Route::post('/profile/updatephoto', "ProfileController@updatePhoto");
Route::get('/profile/edit/{id}', "ProfileController@edit");

// Route::get('/crypto/XRP', "AngularController@serve");
Route::get('/read', function() {

	$stock = Stock::findOrFail(1);
	foreach ($stock->coins as $coin) {
		echo $coin->name;
	}
});

// ENDANGULAR