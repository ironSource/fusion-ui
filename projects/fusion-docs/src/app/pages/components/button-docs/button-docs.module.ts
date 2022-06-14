import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDocsComponent} from './button-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

const routes: Routes = [{path: '', component: ButtonDocsComponent}];

@NgModule({
    declarations: [ButtonDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        IconModule,
        RouterModule.forChild(routes),
        TooltipModule
    ]
})
export class ButtonDocsModule {}
