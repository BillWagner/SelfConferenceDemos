/// <reference path="color.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
var Colors;
(function (Colors) {
    var ColorDataService = (function () {
        function ColorDataService($resource) {
            this.allColors = new Array();
            this.resource = $resource("api/Colors/:id", { id: "@id" }, {
                get: { method: "GET" },
                save: { method: "PUT" },
                query: { method: "GET", isArray: true },
                create: { method: "POST" },
                delete: { method: "DELETE" }
            });
            this.loadAllColors();
        }
        ColorDataService.prototype.getAllColors = function () {
            return this.allColors;
        };

        ColorDataService.prototype.deleteColor = function (color) {
            var _this = this;
            this.resource.delete({ id: color.Id }, function () {
                return _this.loadAllColors();
            });
        };

        ColorDataService.prototype.createColor = function (color) {
            var _this = this;
            this.resource.create(color, function () {
                return _this.loadAllColors();
            });
        };

        ColorDataService.prototype.saveColor = function (color) {
            var _this = this;
            this.resource.save({ id: color.Id }, color, function () {
                return _this.loadAllColors();
            });
        };

        ColorDataService.prototype.loadAllColors = function () {
            var _this = this;
            var me = this;
            this.resource.query({}, function (jsonColors) {
                return _this.loadColorsCache(jsonColors);
            });
        };

        ColorDataService.prototype.loadColorsCache = function (jsonColors) {
            this.allColors.splice(0, this.allColors.length);
            for (var i = 0; i < jsonColors.length; i++) {
                this.allColors.push(new Colors.Color(jsonColors[i]));
            }
        };
        return ColorDataService;
    })();
    Colors.ColorDataService = ColorDataService;
})(Colors || (Colors = {}));
//# sourceMappingURL=colorDataService.js.map
