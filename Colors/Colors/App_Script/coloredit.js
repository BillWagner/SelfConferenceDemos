var Colors;
(function (Colors) {
    (function (Controls) {
        var ColorEditController = (function () {
            function ColorEditController($scope, $element) {
            }
            return ColorEditController;
        })();

        function ColorEditControl() {
            var directive = {};
            directive.restrict = "E";
            directive.transclude = true;
            directive.scope = {
                editColor: "=target"
            };
            directive.template = "<span>" + "<input ng-style=\"{ color:editColor.value }\"  type=\"text\" ng-model=\"editColor.name\" />" + "<input type=\"text\" ng-model=\"editColor.value\" />" + "</span>";
            directive.replace = true;
            directive.controller = ColorEditController;
            return directive;
        }
        Controls.ColorEditControl = ColorEditControl;
    })(Colors.Controls || (Colors.Controls = {}));
    var Controls = Colors.Controls;
})(Colors || (Colors = {}));
//# sourceMappingURL=coloredit.js.map
