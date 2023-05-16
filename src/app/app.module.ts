import {ClipboardModule} from "@angular/cdk/clipboard";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SyncEntityService} from "./service/sync-entity.service";
import {SyncInputService} from "./service/sync-input.service";
import {SearchFilterPipe} from "./sync-entity-overview/search-filter-pipe";
import {SyncEntityOverviewComponent} from './sync-entity-overview/sync-entity-overview.component';
import {SyncInputFormComponent} from './sync-input-form/sync-input-form.component';
import {SyncWeekOverviewComponent} from './sync-week-overview/sync-week-overview.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchFilterPipe,
        SyncEntityOverviewComponent,
        SyncInputFormComponent,
        SyncWeekOverviewComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ClipboardModule,
        FormsModule,
        HttpClientModule,
        MDBBootstrapModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    providers: [SyncEntityService, SyncInputService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
