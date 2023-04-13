import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorEntityListComponent} from './error-entity-list/error-entity-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ErrorEntityService} from "./service/error-entity.service";
import {SyncInputFormComponent} from './sync-input-form/sync-input-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SyncInputService} from "./service/sync-input.service";

@NgModule({
    declarations: [
        AppComponent,
        ErrorEntityListComponent,
        SyncInputFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ErrorEntityService, SyncInputService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
