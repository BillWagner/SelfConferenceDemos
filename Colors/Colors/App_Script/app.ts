/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

module Colors {
    var colorsApp = angular.module("colorsApp", ["ngResource"]);
    colorsApp.controller("pageController", ["$scope", "colorDataService", PageController]);
    colorsApp.factory("colorDataService", ["$resource", (r) => {
        return new ColorDataService(r);
    }]);
}
