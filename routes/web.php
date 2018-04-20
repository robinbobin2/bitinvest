<?php

use App\User;

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
Route::get('profile/{user}',  ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
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
Route::get('/miningraw/{mining}', 'CloudMiningViewController@show');
Route::get('/miningbycat/{category}', 'CloudMiningViewController@byCat');
Route::get('/icoraw/', 'IcoProjectViewController@index');
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
Route::get('/cryptocompar', "CryptoController@CryptoCompare");


// ENDRAW


Route::post('/test', "testcontr@store");
Route::group(['middleware'=>'admin'], function() {
	Route::resource('admin/categories', 'AdminCategoryController');
	Route::resource('admin/analytics', 'AnalyticsController');
	Route::resource('admin/interview', 'InterviewController');
	Route::resource('admin/mining', 'CloudMiningController');
	Route::resource('admin/icoproject', 'IcoProjectController');
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
Route::get('/ico/all', "AngularController@serve");
Route::get('/ico/item/{post}', "AngularController@serve");
Route::get('/ico/category/{category}', "AngularController@serve");
Route::get('/angular/user/', "AngularController@user");
Route::get('/angular/funds/{id}', "AngularController@funds");

// Route::get('/crypto', "AngularController@serve");

Route::get('/crypto/{symbol}', "AngularController@crypto");
Route::get('/bit/', "BitController@index");
Route::get('/bit/pair', "BitController@pair");
Route::get('/profile/register', "ProfileController@register");
Route::get('/profile/delete/{id}', "ProfileController@delete");
Route::get('/profile/login', "ProfileController@login");
Route::get('/profile/edit/{id}', "ProfileController@edit");
// Route::get('/crypto/XRP', "AngularController@serve");


// ENDANGULAR