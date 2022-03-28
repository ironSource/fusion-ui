import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxDocsComponent} from './checkbox-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule, CheckboxModule, IconSelectListModule, InputModule} from '@ironsource/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

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
