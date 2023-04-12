import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorEntityListComponent} from "./error-entity-list/error-entity-list.component";

const routes: Routes = [
    {path: 'errors', component: ErrorEntityListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
