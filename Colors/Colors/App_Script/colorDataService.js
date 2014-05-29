/// <reference path="color.ts" />
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
            var result = new Array();

            this.resource.query({}, function (jsonResult) {
                for (var i = 0; i < jsonResult.length; i++) {
                    result.push(new Colors.Color(jsonResult[i]));
                }
            });
            return result;
        };
        return ColorDataService;
    })();
    Colors.ColorDataService = ColorDataService;
})(Colors || (Colors = {}));
//# sourceMappingURL=colorDataService.js.map
