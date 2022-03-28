import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDocsComponent} from './dropdown-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule, CheckboxModule, InputModule, DropdownModule, MultiDropdownModule, AddboxDropdownModule} from '@ironsource/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {AbTestOptionModule} from '../../../components/ab-test-option/ab-test-option.module';

const routes: Routes = [{path: '', component: DropdownDocsComponent}];

@NgModule({
    declarations: [DropdownDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CheckboxModule,
        InputModule,
        DropdownModule,
        MultiDropdownModule,
        AddboxDropdownModule,
        AbTestOptionModule
    ]
})
export class DropdownDocsModule {}
