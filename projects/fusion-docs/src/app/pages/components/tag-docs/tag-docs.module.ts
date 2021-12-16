import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagDocsComponent} from './tag-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TagModule, TagsInputModule, IconModule, MultiDropdownModule, TooltipModule} from 'projects/fusion-ui/src/public-api';

const routes: Routes = [{path: '', component: TagDocsComponent}];

@NgModule({
    declarations: [TagDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TagModule,
        TagsInputModule,
        IconModule,
        MultiDropdownModule,
        TooltipModule
    ]
})
export class TagDocsModule {}
