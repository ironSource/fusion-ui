import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioDocsComponent} from './radio-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RadioGroupModule, RadioModule, InputModule, IconSelectListModule} from 'projects/fusion-ui/src/public-api';

const routes: Routes = [{path: '', component: RadioDocsComponent}];

@NgModule({
    declarations: [RadioDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        RadioGroupModule,
        RadioModule,
        InputModule,
        IconSelectListModule
    ]
})
export class RadioDocsModule {}
