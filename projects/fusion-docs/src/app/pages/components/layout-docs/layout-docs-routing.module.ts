import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutDocsComponent} from './layout-docs.component';

const routes: Routes = [{path: '', component: LayoutDocsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutDocsRoutingModule {}
