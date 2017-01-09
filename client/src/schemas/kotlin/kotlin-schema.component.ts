import { Component, OnInit } from '@angular/core';

// Global Kotlin runtime loaded in index.html
declare var kotlin: any;

@Component({
    selector: 'kotlin-schema',
    templateUrl: 'kotlin-schema.pug'
})
export class KotlinSchemaComponent implements OnInit {

    public resources: any[];
    public icon: string = '▶';
    public expanded: boolean = false;

    toggle(): void {
        this.expanded = !this.expanded;
        this.icon = this.expanded ? '▼' : '▶';
    }

    ngOnInit(): void {
        const schema = require('../../../../kotlin-schema/generated-schemas/opi-weather-schema.js');
        const resourceTypes = schema['opi-weather-schema'].com.objectpartners.plummer.service_schemas.dtos;
        const resourceNames = Reflect.ownKeys(resourceTypes);

        this.resources = resourceNames
            .map(key => resourceTypes[key]);
    }

    getResourceName(resourceType: any): string {
        return resourceType.name;
    }

    getProperties(resourceType: any): string[] {
        const resource = new resourceType();

        if (resource instanceof kotlin.kotlin.Enum) {
            // IS AN ENUM
            return [`Enum - [${resourceType.values()}]`];
        } else {
            // NOT AN ENUM

            // This will eventually be the "right" way to do reflection of Kotlin classes in JS
            const kclass = kotlin.getKClass(resourceType);
            // console.log(kclass.qualifiedName);
            // console.log(kclass.supertypes);
            // console.log(kclass.members);
            // console.log(kclass.members);

            // Doing it this way is a 'good enough' workaround in pure JS, but isn't perfect
            // and can't supply type information on primitive fields
            const propertyNames = [];
            for (let propertyName in resource) {
                propertyNames.push(propertyName);
            }
            return propertyNames
                .filter(propertyName => !propertyName.includes("$"))
                .filter(propertyName => !/component[0-9]+/.test(propertyName));
        }
    }
}