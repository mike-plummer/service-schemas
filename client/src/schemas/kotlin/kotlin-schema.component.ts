import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kotlin-schema',
    templateUrl: 'kotlin-schema.pug'
})
export class KotlinSchemaComponent implements OnInit {

    private Kotlin: any = require('../../../lib/kotlin-js/kotlin.js');

    public resources: any[];

    ngOnInit(): void {
        const schema = require('../../../../server/generated-schemas/opi-weather-schema.js');
        const resourceRoot = schema['opi-weather-schema'].com.objectpartners.plummer.service_schemas;
        const resourceKeys = Reflect.ownKeys(resourceRoot);

        this.resources = resourceKeys
            .map(key => resourceRoot[key]);
    }

    getResourceName(resource: any): string {
        return resource.name;
    }

    getProperties(resource: any): any[] {
        return Object.keys(resource);
    }
}