import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleDocsComponent} from './toggle-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v2';

const routes: Routes = [{path: '', component: ToggleDocsComponent}];

@NgModule({
    declarations: [ToggleDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ToggleModule
    ]
})
export class ToggleDocsModule {}
