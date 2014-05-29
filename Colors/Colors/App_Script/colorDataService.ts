﻿/// <reference path="color.ts" />
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
            return this.resource.query();
        }

        private resource: ng.resource.IResourceClass<ng.resource.IResource<IColor>>;
    }

}
