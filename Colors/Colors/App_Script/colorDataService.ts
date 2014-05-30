/// <reference path="color.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module Colors {
    interface ICustomResourceClass<T> extends ng.resource.IResourceClass<T> {
        create(color: IColor, success: Function);
    }

    export class ColorDataService {
        constructor($resource: ng.resource.IResourceService) {
            this.resource = <ICustomResourceClass<ng.resource.IResource<IColor>>> $resource("api/Colors/:id",
                { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    query: { method: "GET", isArray: true },
                    create: { method: "POST" },
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

        public createColor(color: IColor) {
            this.resource.create(color, () => this.loadAllColors());
        }

        public saveColor(color: IColor) {
            this.resource.save({ id: color.Id }, color, () => this.loadAllColors());
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
