import { Component, OnInit } from '@angular/core';
import { AbstractSchemaComponent } from '../AbstractSchemaComponent';

@Component({
    selector: 'reflection-schema',
    templateUrl: 'reflection-schema.pug'
})
export class ReflectionSchemaComponent extends AbstractSchemaComponent implements OnInit {
    public resources: any[][];

    ngOnInit(): void {
        const schema: any = require('../../../../java-schema/build/reflective-properties.json');

        this.resources = Reflect.ownKeys(schema)
            .map(resourceName => [resourceName, this.buildProperties(schema[resourceName])]);
    }

    private buildProperties(resource): any[] {
        return Reflect.ownKeys(resource)
            .map(name => [ name, resource[name] ]);
    }
}