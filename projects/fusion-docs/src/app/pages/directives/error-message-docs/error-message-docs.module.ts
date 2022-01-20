import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageDocsComponent} from './error-message-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule, ErrorMessageModule, InputModule} from 'projects/fusion-ui/src/public-api';

const routes: Routes = [{path: '', component: ErrorMessageDocsComponent}];

@NgModule({
    declarations: [ErrorMessageDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ErrorMessageModule,
        InputModule
    ]
})
export class ErrorMessageDocsModule {}
