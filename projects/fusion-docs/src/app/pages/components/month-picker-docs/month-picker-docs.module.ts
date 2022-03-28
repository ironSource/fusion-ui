import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthPickerDocsComponent} from './month-picker-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MonthPickerDocsRoutingModule} from './month-picker-docs-routing.module';
import {MonthPickerModule} from '@ironsource/fusion-ui';
import {TableModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [MonthPickerDocsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MonthPickerDocsRoutingModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        MonthPickerModule,
        TableModule
    ]
})
export class MonthPickerDocsModule {}
