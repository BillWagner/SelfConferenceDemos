/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
var Colors;
(function (Colors) {
    var ColorDataService = (function () {
        function ColorDataService($resource) {
            this.resource = $resource("api/Colors/:id", { id: "@id" }, {
                query: { method: "GET", isArray: true }
            });
        }
        ColorDataService.prototype.getAllColors = function () {
            return this.resource.query();
        };
        return ColorDataService;
    })();
    Colors.ColorDataService = ColorDataService;
})(Colors || (Colors = {}));
//# sourceMappingURL=colorDataService.js.map
