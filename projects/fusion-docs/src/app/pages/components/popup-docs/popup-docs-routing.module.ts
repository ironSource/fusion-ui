import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PopupDocsComponent} from './popup-docs.component';

const routes: Routes = [{path: '', component: PopupDocsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PopupDocsRoutingModule {}
