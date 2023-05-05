import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SyncEntityListComponent} from "./sync-entity-list/sync-entity-list.component";
import {SyncInputFormComponent} from "./sync-input-form/sync-input-form.component";
import {SyncWeekOverviewComponent} from "./sync-week-overview/sync-week-overview.component";

const routes: Routes = [
    {path: 'input', component: SyncInputFormComponent},
    {path: 'sync/:syncTableUUID', component: SyncEntityListComponent},
    {path: 'sync/:syncTableUUID/:resourceId/:date', component: SyncWeekOverviewComponent},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
