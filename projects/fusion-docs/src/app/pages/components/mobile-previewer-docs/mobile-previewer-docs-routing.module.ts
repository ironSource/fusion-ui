import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MobilePreviewerDocsComponent} from './mobile-previewer-docs.component';

const routes: Routes = [{path: '', component: MobilePreviewerDocsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobilePreviewerDocsRoutingModule {}
