import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectDocsComponent} from './dropdown-dual-multi-select-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {DropdownDualMultiSelectModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/dropdown-dual-multi-select/dropdown-dual-multi-select.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: DropdownDualMultiSelectDocsComponent}];

@NgModule({
    declarations: [DropdownDualMultiSelectDocsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), DropdownDualMultiSelectModule, ReactiveFormsModule]
})
export class DropdownDualMultiSelectDocsModule {}
