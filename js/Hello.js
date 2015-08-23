function CommonHello($scope) {
    $scope.commonClick = function(){
        alert("CommonHello");
    };
}

function Hello1($scope) {
    $scope.greeting = {
        text: 'test1'
    };
    $scope.click1 = function(){
        alert("test1");
    };
}

function Hello2($scope) {
    $scope.greeting = {
        text: 'test2'
    };
    $scope.click2 = function(){
        alert("test2");
    };
}