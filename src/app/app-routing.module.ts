import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorEntityListComponent} from "./error-entity-list/error-entity-list.component";
import {SyncInputFormComponent} from "./sync-input-form/sync-input-form.component";

const routes: Routes = [
    {path: 'errors', component: ErrorEntityListComponent},
    {path: 'input', component: SyncInputFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
