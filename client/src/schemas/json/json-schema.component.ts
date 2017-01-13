import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'json-schema',
    templateUrl: 'json-schema.pug'
})
export class JsonSchemaComponent implements OnInit {

    public resources: any[][];
    public icon: string = '▶';
    public expanded: boolean = false;

    toggle(): void {
        this.expanded = !this.expanded;
        this.icon = this.expanded ? '▼' : '▶';
    }

    ngOnInit(): void {
        const schema: any = require('../../../../java-schema/build/json-schema.json');

        this.resources = Reflect.ownKeys(schema.definitions)
            .map(resourceName => [resourceName, this.buildProperties(schema.definitions[resourceName])]);
    }

    private buildProperties(resource): any[] {
        const properties: any[] =  Reflect.ownKeys(resource.properties)
            .map(name => this.buildProperty(name, resource.properties[name]));

        properties.forEach(property => property.required = resource.required && resource.required.includes(property.name));

        return properties;
    }

    private buildProperty(name, prop): any {
        const property = {
            name,
            type: prop.type,
            required: false
        };

        if (property.type === 'array') {
            const arrayType = prop.items.$ref;
            property.type = `${property.type}[${arrayType.substring(arrayType.lastIndexOf('/')+1)}]`
        } else if (prop.enum) {
            property.type = `Enum [${prop.enum}]`;
        } else if (prop.$ref) {
            property.type = prop.$ref.substring(prop.$ref.lastIndexOf('/')+1);
        }

        if (prop.requiredProperties && prop.requiredProperties.includes(name)) {
            property.required = true;
        }

        return property;
    }
}