import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconStatusDocsComponent} from './icon-status-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule, Routes} from '@angular/router';
import {IconModule, IconStatusModule, SvgModule} from '@ironsource/fusion-uifusion-ui';

const routes: Routes = [{path: '', component: IconStatusDocsComponent}];

@NgModule({
    declarations: [IconStatusDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        SvgModule,
        IconModule,
        IconStatusModule
    ]
})
export class IconStatusDocsModule {}
