import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconDocsComponent} from './icon-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {SvgModule, IconModule, FlagModule, IconStatusModule} from 'projects/fusion-ui/src/public-api';

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
