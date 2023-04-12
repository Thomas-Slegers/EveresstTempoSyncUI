import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorEntityListComponent} from './error-entity-list/error-entity-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ErrorEntityService} from "./service/error-entity.service";

@NgModule({
    declarations: [
        AppComponent,
        ErrorEntityListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [ErrorEntityService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
