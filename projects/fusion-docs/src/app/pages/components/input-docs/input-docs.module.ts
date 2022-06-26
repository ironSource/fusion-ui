import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDocsComponent} from './input-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {InputModule} from '@ironsource/fusion-ui/components/input/v3';
import {ReactiveFormsModule} from '@angular/forms';
import {TextareaModule} from '@ironsource/fusion-ui/components/textarea/v3';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v1';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

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
