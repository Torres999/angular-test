var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl',['$strore', 
	function($scope){
		$scope.book={
			name:'Hello'
		}
	}
]);

bookStoreCtrls.controller('BookStoreCtrl',['$scope',
	function($scope){
		$scope.books=[
			{name:'Name1',auther:'Jack'},
			{name:'Name2',auther:'Rose'},
			{name:'Name3',auther:'Mike'}
		]
	}
])