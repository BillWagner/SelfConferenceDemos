/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="pagecontroller.ts" />
/// <reference path="coloredit.ts" />
/// <reference path="colordataservice.ts" />
var Colors;
(function (Colors) {
    var colorsApp = angular.module("colorsApp", ["ngResource"]);
    colorsApp.controller("pageController", ["$scope", "colorDataService", Colors.PageController]);
    colorsApp.factory("colorDataService", [
        "$resource", function (r) {
            return new Colors.ColorDataService(r);
        }]);
    colorsApp.directive("coloredit", Colors.Controls.ColorEditControl);
})(Colors || (Colors = {}));
//# sourceMappingURL=app.js.map
