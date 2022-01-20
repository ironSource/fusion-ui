import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlertDocsComponent} from './alert-docs.component';

const routes: Routes = [{path: '', component: AlertDocsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlertDocsRoutingModule {}
