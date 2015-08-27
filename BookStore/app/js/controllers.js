var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl',['$scope', 
	function($scope){
		$scope.book={
			name:'Hello'
		}
	}
]);

bookStoreCtrls.controller('ListCtrl',['$scope',
	function($scope){
		$scope.books=[
			{name:'Jack',auther:'Lfex'},
			{name:'Rose',auther:'lufax'},
			{name:'Mike',auther:'lu'}
		]
	}
])