/// <reference path="color.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module Colors {

    export class ColorDataService {
        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource("api/Colors/:id",
                { id: "@id" },
                {
                    query: { method: "GET", isArray: true },
                });
        }

        public getAllColors() {
            var result = new Array<IColor>();

            this.resource.query({}, function (jsonResult) {
                for (var i = 0; i < jsonResult.length; i++) {
                    result.push(new Color(jsonResult[i]));
                }
            });
            return result;
        }

        private resource: ng.resource.IResourceClass<ng.resource.IResource<IColor>>;
    }

}
