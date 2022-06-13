import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickOutsideDocsComponent} from './click-outside-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v1';

const routes: Routes = [{path: '', component: ClickOutsideDocsComponent}];

@NgModule({
    declarations: [ClickOutsideDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ClickOutsideModule,
        ToggleModule
    ]
})
export class ClickOutsideDocsModule {}
