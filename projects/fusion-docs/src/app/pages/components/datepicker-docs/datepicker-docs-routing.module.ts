import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatepickerDocsComponent} from './datepicker-docs.component';

const routes: Routes = [{path: '', component: DatepickerDocsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatepickerDocsRoutingModule {}
