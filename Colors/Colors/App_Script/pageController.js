/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="colordataservice.ts" />
var Colors;
(function (Colors) {
    var PageController = (function () {
        function PageController($scope, colorDataService) {
            this.$scope = $scope;
            this.colorDataService = colorDataService;
            this.showName = true;
            this.showValue = true;
            this.showSample = true;
            this.sortOrder = "name";
            this.colorData = colorDataService.getAllColors();
        }
        PageController.prototype.toggleShowSample = function () {
            this.showSample = !this.showSample;
        };
        PageController.prototype.toggleShowValue = function () {
            this.showValue = !this.showValue;
        };
        PageController.prototype.toggleShowName = function () {
            this.showName = !this.showName;
        };

        PageController.prototype.deleteColor = function (color) {
            this.colorDataService.deleteColor(color);
            var index = this.colorData.indexOf(color);
            this.colorData.splice(index, 1);
        };
        return PageController;
    })();
    Colors.PageController = PageController;
})(Colors || (Colors = {}));
//# sourceMappingURL=pageController.js.map
