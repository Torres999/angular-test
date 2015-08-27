var bookStoreApp = angular.module('bookStoreApp',[
		'ngRoute', 'ngAnimate', 'bookStoreCtrls'
	]);

bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl: 'tpls/hello.html',
		controller: 'HelloCtrl'
	}).when('/list',{
		templateUrl: 'tpls/bookList.html',
		controller:'ListCtrl'
	}).otherwise({
		redirectTo: '/hello'
	})
});