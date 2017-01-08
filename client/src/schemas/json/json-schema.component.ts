import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'json-schema',
    templateUrl: 'json-schema.pug'
})
export class JsonSchemaComponent implements OnInit {

    public resources: any[];

    ngOnInit(): void {
        const schema = require('../../../../java-schema/json-schema.json');

        console.log('Java schema loaded');
    }
}