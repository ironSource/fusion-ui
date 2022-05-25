import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagDocsComponent} from './tag-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TagModule, IconModule, TooltipModule} from '@ironsource/fusion-ui';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input/v1';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';

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
