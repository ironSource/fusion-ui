import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectDocsComponent} from './dropdown-dual-multi-select-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: DropdownDualMultiSelectDocsComponent}];

@NgModule({
    declarations: [DropdownDualMultiSelectDocsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), DropdownDualMultiSelectModule, ReactiveFormsModule]
})
export class DropdownDualMultiSelectDocsModule {}
