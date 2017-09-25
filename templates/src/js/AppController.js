(function(angular) {
    'use strict';
    var myApp = angular.module('myApp', []);

    myApp.controller('GreetingController', ['$scope', function ($scope) {

        $scope.greeting = 'Hola!';
        $scope.aa = 3;

        $scope.collection = [1,2,3,4,5,6,7,8,9,10];
        $scope.array_col = [];

        $scope.submit = function (val) {
            console.log('submitted' + val);
            $scope.array_col[val] = True;
            $scope.aa += 1;

        }
    }]);
})(window.angular);