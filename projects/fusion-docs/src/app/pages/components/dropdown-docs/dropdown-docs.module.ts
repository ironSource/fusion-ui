import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDocsComponent} from './dropdown-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AbTestOptionModule} from '../../../components/ab-test-option/ab-test-option.module';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v1';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
import {AddboxDropdownModule} from '@ironsource/fusion-ui/components/addbox-dropdown/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

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
        AbTestOptionModule,
        IconModule
    ]
})
export class DropdownDocsModule {}
