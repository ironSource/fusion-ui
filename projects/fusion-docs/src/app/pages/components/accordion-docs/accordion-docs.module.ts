/* eslint-disable max-len */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionDocsComponent} from './accordion-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AccordionExampleContentModule} from '../../../components/accordion-example-components/accordion-example-content/accordion-example-content.module';
import {AccordionModule} from '@ironsource/fusion-ui';

const routes: Routes = [{path: '', component: AccordionDocsComponent}];

@NgModule({
    declarations: [AccordionDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        AccordionModule,
        AccordionExampleContentModule
    ]
})
export class AccordionDocsModule {}
