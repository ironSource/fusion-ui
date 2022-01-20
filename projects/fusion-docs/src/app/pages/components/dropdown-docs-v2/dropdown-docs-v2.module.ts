import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDocsV2Component} from './dropdown-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule, ErrorMessageModule, MultiDropdownModule} from 'projects/fusion-ui/src/public-api';
import {DropdownCustomPlaceholderModule} from '../../../components/dropdown-custom-placeholder/dropdown-custom-placeholder.module';

const routes: Routes = [{path: '', component: DropdownDocsV2Component}];

@NgModule({
    declarations: [DropdownDocsV2Component],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        DropdownModule,
        MultiDropdownModule,
        ErrorMessageModule,
        DropdownCustomPlaceholderModule
    ]
})
export class DropdownDocsV2Module {}
