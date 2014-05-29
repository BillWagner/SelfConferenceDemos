/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="colordataservice.ts" />
/// <reference path="color.ts" />
var Colors;
(function (Colors) {
    var PageController = (function () {
        function PageController($scope, colorDataService) {
            this.$scope = $scope;
            this.colorDataService = colorDataService;
            this.newColor = new Colors.Color(null);
            this.showSample = true;
            this.showName = true;
            this.showValue = true;
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

        PageController.prototype.addText = function () {
            return (this.addMode ? "Save" : "Add");
        };

        PageController.prototype.toggleAddMode = function () {
            if (this.addMode) {
                this.colorDataService.createColor(this.newColor);
                this.colorData.push(this.newColor);
                this.newColor = new Colors.Color(null);
            }
            this.addMode = !this.addMode;
        };

        PageController.prototype.toggleEditMode = function (color) {
            color.editMode = !color.editMode;
            if (color.editMode) {
                color.editColor = {
                    name: color.name,
                    value: color.value,
                    Id: color.Id
                };
            } else {
                this.colorDataService.saveColor(color.editColor);
                color.name = color.editColor.name;
                color.value = color.editColor.value;
            }
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
