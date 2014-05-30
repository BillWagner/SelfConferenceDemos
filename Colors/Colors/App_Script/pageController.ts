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
        addMode: boolean;

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

        toggleAddMode() {
            if (this.addMode) {
                this.colorDataService.createColor(this.newColor);
                this.colorData.push(this.newColor);
                this.newColor = new Color(null);
            }
            this.addMode = !this.addMode;
        }

        toggleEditMode(color) {
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
        }

        newColor = new Color(null);
        colorData: Array<IColor>;
    }
}