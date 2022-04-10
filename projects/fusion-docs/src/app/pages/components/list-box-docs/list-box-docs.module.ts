import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBoxDocsComponent} from './list-box-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ListBoxModule, MultiDropdownModule} from '@ironsource/fusion-ui';

const routes: Routes = [{path: '', component: ListBoxDocsComponent}];

@NgModule({
    declarations: [ListBoxDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ListBoxModule,
        MultiDropdownModule
    ]
})
export class ListBoxDocsModule {}
