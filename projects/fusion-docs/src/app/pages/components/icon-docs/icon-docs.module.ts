import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconDocsComponent} from './icon-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status';

const routes: Routes = [{path: '', component: IconDocsComponent}];

@NgModule({
    declarations: [IconDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        SvgModule,
        IconModule,
        FlagModule,
        IconStatusModule
    ]
})
export class IconDocsModule {}
