import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MonthPickerDocsComponent} from './month-picker-docs.component';

const routes: Routes = [{path: '', component: MonthPickerDocsComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MonthPickerDocsRoutingModule {}
