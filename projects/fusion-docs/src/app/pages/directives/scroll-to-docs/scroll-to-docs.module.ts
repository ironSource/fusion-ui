import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollToDocsComponent} from './scroll-to-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ScrollToModule, InputModule, ButtonModule} from 'projects/fusion-ui/src/public-api';

const routes: Routes = [{path: '', component: ScrollToDocsComponent}];

@NgModule({
    declarations: [ScrollToDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ScrollToModule,
        InputModule,
        ButtonModule
    ]
})
export class ScrollToDocsModule {}
