import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographyDocsComponent} from './typography-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';

const routes: Routes = [{path: '', component: TypographyDocsComponent}];

@NgModule({
    declarations: [TypographyDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TableModule
    ]
})
export class TypographyDocsModule {}
