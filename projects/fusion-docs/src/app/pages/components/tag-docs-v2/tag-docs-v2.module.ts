import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagDocsV2Component} from './tag-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ClonePipe, FilterByFieldPipe} from '@ironsource/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input/v2';
import {TagModule} from '@ironsource/fusion-ui/components/tag/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const routes: Routes = [{path: '', component: TagDocsV2Component}];

@NgModule({
    declarations: [TagDocsV2Component],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        TagModule,
        TagsInputModule,
        IconModule,
        ReactiveFormsModule
    ],
    providers: [FilterByFieldPipe, ClonePipe]
})
export class TagDocsV2Module {}
