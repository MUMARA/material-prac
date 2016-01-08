/**
 * Created by ijii on 08-Jan-16.
 */


var app = angular.module("myApp", ["ngMaterial"]);
app.controller("myController", function ($scope) {

    $scope.arr =[];


    $scope.click = function (text) {
        $scope.arr.push($scope.text);
        $scope.text ="";
    }

});
