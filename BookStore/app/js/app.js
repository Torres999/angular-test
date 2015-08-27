var schApp = angular.module('schApp',[
		'ngRoute', 'ngAnimate', 'schCtrls','schServices'
	]);

schApp.config(function($routeProvider){
	$routeProvider.when('/uploadfile',{
		templateUrl: 'tpls/uploadfile.html',
		controller: 'UploadfileCtrl'
	}).when('/account',{
		templateUrl: 'tpls/account.html',
		controller: 'AccountCtrl'
	}).when('/updatename',{
		templateUrl: 'tpls/updatename.html',
		controller: 'UpdateNameCtrl'
	}).when('/default',{
		templateUrl: 'tpls/default.html',
		controller: 'DefaultCtrl'

	}).when('/hello',{
		templateUrl: 'tpls/hello.html',
		controller: 'HelloCtrl'
	}).when('/list',{
		templateUrl: 'tpls/bookList.html',
		controller:'ListCtrl'
	}).otherwise({
		redirectTo: '/default'
	})
});