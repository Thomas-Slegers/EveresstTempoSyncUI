import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SyncEntityListComponent} from './sync-entity-list/sync-entity-list.component';
import {HttpClientModule} from "@angular/common/http";
import {SyncEntityService} from "./service/sync-entity.service";
import {SyncInputFormComponent} from './sync-input-form/sync-input-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SyncInputService} from "./service/sync-input.service";

@NgModule({
    declarations: [
        AppComponent,
        SyncEntityListComponent,
        SyncInputFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [SyncEntityService, SyncInputService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
