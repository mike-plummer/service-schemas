import { NgModule } from '@angular/core';
import { JsonSchemaComponent } from './json/json-schema.component';
import { KotlinSchemaComponent } from './kotlin/kotlin-schema.component';
import { StaticSchemaComponent } from './static/static-schema.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ JsonSchemaComponent, KotlinSchemaComponent, StaticSchemaComponent ],
    declarations: [ JsonSchemaComponent, KotlinSchemaComponent, StaticSchemaComponent ],
    providers: [ ]
})
export class SchemasModule {
    constructor() {
    }
}