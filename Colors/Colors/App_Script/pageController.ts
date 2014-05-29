/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="colordataservice.ts" />


module Colors {
    export class PageController {
        constructor(
            private $scope: ng.IScope,
            private colorDataService: ColorDataService) {
            this.colorData = colorDataService.getAllColors();
        }
        showName: boolean = true;
        showValue: boolean = true;
        showSample: boolean = true;
        sortOrder: string = "name";

        toggleShowSample() {
            this.showSample = !this.showSample;
        }
        toggleShowValue() {
            this.showValue = !this.showValue;
        }
        toggleShowName() {
            this.showName = !this.showName;
        }

        deleteColor(color) {
            this.colorDataService.deleteColor(color);
            var index = this.colorData.indexOf(color);
            this.colorData.splice(index, 1);
        }



        colorData: Array<IColor>;
    }
}