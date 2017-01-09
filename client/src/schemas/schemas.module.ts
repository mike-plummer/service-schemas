import { NgModule } from '@angular/core';
import { JsonSchemaComponent } from './json/json-schema.component';
import { KotlinSchemaComponent } from './kotlin/kotlin-schema.component';
import { ReflectionSchemaComponent } from './reflection/reflection-schema.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ JsonSchemaComponent, KotlinSchemaComponent, ReflectionSchemaComponent ],
    declarations: [ JsonSchemaComponent, KotlinSchemaComponent, ReflectionSchemaComponent ],
    providers: [ ]
})
export class SchemasModule {
    constructor() {
    }
}