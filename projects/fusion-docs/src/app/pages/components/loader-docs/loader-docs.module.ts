import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderDocsComponent} from './loader-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderModule, LoaderInlineModule, ButtonModule} from 'projects/fusion-ui/src/public-api';
import {CustomLoaderModule} from './custom-loader/custom-loader.module';

const routes: Routes = [{path: '', component: LoaderDocsComponent}];

@NgModule({
    declarations: [LoaderDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        LoaderModule,
        LoaderInlineModule,
        CustomLoaderModule,
        ButtonModule
    ]
})
export class LoaderDocsModule {}
