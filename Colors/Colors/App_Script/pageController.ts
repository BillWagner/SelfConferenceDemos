

module Colors {
    export class PageController {
        constructor(
            private $scope: ng.IScope,
            private colorDataService: ColorDataService) {
            this.colorData = colorDataService.getAllColors();
        }
        showName: boolean = true;
        showValue: boolean = true;

        colorData: ng.resource.IResourceArray<ng.resource.IResource<IColor>>;
    }
}