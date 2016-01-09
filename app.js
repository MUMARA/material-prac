/**
 * Created by ijii on 08-Jan-16.
 */


var app = angular.module("myApp", ["ngMaterial"]);
app.controller("myController", function ($scope) {


    $scope.arr = [
        {incomingText : "pehla", isCheckOrNot : false},
        {incomingText : "dusra", isCheckOrNot : false}
    ];
    $scope.text = "";

    $scope.add = function (text) {

        $scope.arr.push({incomingText : text, isCheckOrNot : false});
        console.log($scope.arr);
        $scope.text = "";

    }
});
