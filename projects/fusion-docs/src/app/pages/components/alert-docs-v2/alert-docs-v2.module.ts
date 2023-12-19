import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertDocsV2Component} from './alert-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v2';
import {FileCsvUploadModule} from '@ironsource/fusion-ui/components/file-csv-upload';
import {CapitalizePipe, TruncatePipe} from '@ironsource/fusion-ui//pipes/string';
import {ChipFiltersModule} from '@ironsource/fusion-ui/components/chip-filters';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4';

const routes: Routes = [{path: '', component: AlertDocsV2Component}];

@NgModule({
    declarations: [AlertDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        AlertModule,
        FileCsvUploadModule,
        CapitalizePipe,
        TruncatePipe,
        ChipFiltersModule,
        ChipFilterModule,
        DropdownModule,
        DropdownDualMultiSelectModule,
        ButtonComponent,
        CheckboxComponent
    ]
})
export class AlertDocsV2Module {}
