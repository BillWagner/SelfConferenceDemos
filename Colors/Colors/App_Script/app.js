/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var Colors;
(function (Colors) {
    var colorsApp = angular.module("colorsApp", ["ngResource"]);
    colorsApp.controller("pageController", ["$scope", "colorDataService", Colors.PageController]);
    colorsApp.factory("colorDataService", [
        "$resource", function (r) {
            return new Colors.ColorDataService(r);
        }]);
})(Colors || (Colors = {}));
//# sourceMappingURL=app.js.map
