/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />


module Colors {
    export class PageController {
        constructor(
            private $scope: ng.IScope,
            private colorDataService: ColorDataService) {
            this.colorData = colorDataService.getAllColors();
        }

        colorData: ng.resource.IResourceArray<ng.resource.IResource<IColor>>;
    }
}