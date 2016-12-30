import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SchemasModule } from '../schemas/schemas.module';

@NgModule({
    imports: [ BrowserModule, SchemasModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ ]
})
export class AppModule {
    constructor() {
    }
}