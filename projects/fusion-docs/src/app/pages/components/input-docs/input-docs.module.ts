import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDocsComponent} from './input-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AlertModule, TextareaModule, ErrorMessageModule, IconModule, TooltipModule} from '@ironsource/fusion-ui';
import {InputModule} from '@ironsource/fusion-ui/components/input/v3';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: InputDocsComponent}];

@NgModule({
    declarations: [InputDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        InputModule,
        TextareaModule,
        ReactiveFormsModule,
        AlertModule,
        ErrorMessageModule,
        IconModule,
        TooltipModule
    ]
})
export class InputDocsModule {}
