import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {CheckboxDocsComponent} from './checkbox-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {InputModule} from '@ironsource/fusion-ui/components/input/v3';
import {IconSelectListModule} from '@ironsource/fusion-ui/components/icon-select-list/v1';

const routes: Routes = [{path: '', component: CheckboxDocsComponent}];

@NgModule({
    declarations: [CheckboxDocsComponent],
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
        IconSelectListModule
    ]
})
export class CheckboxDocsModule {}
