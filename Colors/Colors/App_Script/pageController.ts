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


        colorData: Array<IColor>;
    }
}