import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CopyToClipboardDocsComponent} from './copy-to-clipboard-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CopyToClipboardModule} from '@ironsource/fusion-ui';

const routes: Routes = [{path: '', component: CopyToClipboardDocsComponent}];

@NgModule({
    declarations: [CopyToClipboardDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CopyToClipboardModule
    ]
})
export class CopyToClipboardDocsModule {}
