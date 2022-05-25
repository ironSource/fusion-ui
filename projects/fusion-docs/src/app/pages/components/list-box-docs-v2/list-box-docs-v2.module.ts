import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBoxDocsV2Component} from './list-box-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ListBoxModule} from '@ironsource/fusion-ui/components/list-box/v2';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';

const routes: Routes = [{path: '', component: ListBoxDocsV2Component}];

@NgModule({
    declarations: [ListBoxDocsV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ReactiveFormsModule,
        ListBoxModule,
        MultiDropdownModule
    ]
})
export class ListBoxDocsV2Module {}
