import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographyDocV3Component} from './typography-docs-v3.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';

const routes: Routes = [{path: '', component: TypographyDocV3Component}];

@NgModule({
    declarations: [TypographyDocV3Component],
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
export class TypographyDocsV3Module {}
