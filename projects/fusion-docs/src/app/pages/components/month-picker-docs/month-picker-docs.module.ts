import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthPickerDocsComponent} from './month-picker-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MonthPickerDocsRoutingModule} from './month-picker-docs-routing.module';
import {MonthPickerModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/month-picker/month-picker.module';
import {TableModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/table/table.module';

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
