module Colors.Controls {
    class ColorEditController {
        constructor($scope: ng.IScope, $element: HTMLElement) {
        }
    }

    export function ColorEditControl(): ng.IDirective {
        var directive: ng.IDirective = {};
        directive.restrict = "E";
        directive.transclude = true;
        directive.scope = {
            editColor: "=target"
        };
        directive.template = "<span>" +
        "<input ng-style=\"{ color:editColor.value }\"  type=\"text\" ng-model=\"editColor.name\" />" +
        "<input type=\"text\" ng-model=\"editColor.value\" />" +
        "</span>";
        directive.replace = true;
        directive.controller = ColorEditController;
        return directive;
    }
} 