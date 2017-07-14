/// <reference path="../angular.min.js" />

var module = angular.module("myApp", []);
var controller = module.controller("myController", function ($scope) {
    $scope.message1 = "We will do your work!";
    $scope.message2 = "C#, Asp.Net , Angular Js , PHP ....";
    $scope.message3 = "Window App, WebSite, Web App ....";
    $scope.message4 = "We will do your Home work!";
    $scope.message5 = "We will do your Home work!";
    $scope.message6 = "We will do your Home work!";

    $scope.myStyle1 = { color: "orange" };
    $scope.myStyle2 = { color: "Green" };
    $scope.myStyle3 = { color: "teal" };
    $scope.myStyle4 = { color: "blue" };
    $scope.myStyle5 = { color: "orange" };
    $scope.myStyle6 = { color: "purple" };

});