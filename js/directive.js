var myModule = angular.module("MyModule",[]);

myModule.directive("hello",function(){
	return{
		restrict:'E',
		template:'<div>Hi my first directive</div>',
		replace:true
	}
})