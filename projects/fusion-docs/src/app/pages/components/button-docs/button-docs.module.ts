import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDocsComponent} from './button-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {IconModule, TooltipModule} from '@ironsource/fusion-ui/components';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';

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
