import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'reflection-schema',
    templateUrl: 'reflection-schema.pug'
})
export class ReflectionSchemaComponent implements OnInit {
    public resources: any[][];
    public icon: string = '▶';
    public expanded: boolean = false;

    toggle(): void {
        this.expanded = !this.expanded;
        this.icon = this.expanded ? '▼' : '▶';
    }

    ngOnInit(): void {
        const schema: any = require('../../../../java-schema/reflective-properties.json');

        this.resources = Reflect.ownKeys(schema)
            .map(resourceName => [resourceName, this.buildProperties(schema[resourceName])]);
    }

    private buildProperties(resource): any[] {
        return Reflect.ownKeys(resource)
            .map(name => [ name, resource[name] ]);
    }
}