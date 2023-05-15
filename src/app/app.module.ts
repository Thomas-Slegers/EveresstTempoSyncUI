import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {ClipboardModule} from "@angular/cdk/clipboard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SyncEntityService} from "./service/sync-entity.service";
import {SearchFilterPipe} from "./sync-entity-overview/search-filter-pipe";
import {SyncEntityOverviewComponent} from './sync-entity-overview/sync-entity-overview.component';
import {SyncInputFormComponent} from './sync-input-form/sync-input-form.component';
import {SyncInputService} from "./service/sync-input.service";
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
        NgbModule,
        ReactiveFormsModule,
    ],
    providers: [SyncEntityService, SyncInputService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
