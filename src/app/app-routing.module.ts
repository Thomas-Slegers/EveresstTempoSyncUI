import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SyncEntityOverviewComponent} from "./sync-entity-overview/sync-entity-overview.component";
import {SyncInputFormComponent} from "./sync-input-form/sync-input-form.component";
import {SyncWeekOverviewComponent} from "./sync-week-overview/sync-week-overview.component";

const routes: Routes = [
    {path: 'input', component: SyncInputFormComponent},
    {path: 'sync/:syncTableUUID', component: SyncEntityOverviewComponent},
    {path: 'sync/:syncTableUUID/:resourceId/:date', component: SyncWeekOverviewComponent},
    {path: 'sync/:syncTableUUID/:resourceId', component: SyncWeekOverviewComponent},
    {path: '**', redirectTo: '/input'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
