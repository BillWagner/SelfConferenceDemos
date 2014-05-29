/// <reference path="color.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module Colors {

    export class ColorDataService {
        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource("api/Colors/:id",
                { id: "@id" },
                {
                    query: { method: "GET", isArray: true },
                    delete: { method: "DELETE" }
                });
            this.loadAllColors();
        }

        public getAllColors() {
            return this.allColors;
        }

        public deleteColor(color: IColor) {
            this.resource.delete({ id: color.Id }, () => this.loadAllColors());
        }

        private loadAllColors() {
            var me = this;
            this.resource.query({}, (jsonColors) => this.loadColorsCache(jsonColors));
        }

        private loadColorsCache(jsonColors: IColor[]) {
            this.allColors.splice(0, this.allColors.length);
            for (var i = 0; i < jsonColors.length; i++) {
                this.allColors.push(new Color(jsonColors[i]));
            }
        }

        private allColors = new Array<IColor>();
        private resource: ng.resource.IResourceClass<ng.resource.IResource<IColor>>;
    }

}
