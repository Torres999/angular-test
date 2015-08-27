var schCtrls = angular.module('schCtrls', []);

schCtrls.controller('DefaultCtrl',['$scope', 
	function($scope){
		$scope.page={
			name:'Welcome'
		}
	}
]);

schCtrls.controller('UploadfileCtrl',['$scope', 
	function($scope){
		$scope.page={
			name:'UploadfileCtrl '
		}
	}
]);

schCtrls.controller('AccountCtrl',['$scope', 
	function($scope){
		$scope.page={
			name:'AccountCtrl '
		}
	}
]);

schCtrls.controller('UpdateNameCtrl',['$scope', 
	function($scope){
		$scope.page={
			name:'UpdateNameCtrl '
		}
	}
]);

schCtrls.controller('HelloCtrl',['$scope', 
	function($scope){
		$scope.book={
			name:'Hello'
		}
	}
]);

schCtrls.controller('ListCtrl',['$scope',
	function($scope){
		$scope.books=[
			{name:'Jack',auther:'Lfex'},
			{name:'Rose',auther:'lufax'},
			{name:'Mike',auther:'lu'}
		]
	}
])