import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatepickerDocsRoutingModule} from './datepicker-docs-routing.module';
import {DatepickerDocsComponent} from './datepicker-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatepickerModule} from '@ironsource/fusion-ui/components/datepicker/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange/v1';
import {GenericPipe} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [DatepickerDocsComponent],
    imports: [
        CommonModule,
        GenericPipe,
        IconModule,
        DatepickerDocsRoutingModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ReactiveFormsModule,
        DatepickerModule,
        DaterangeModule
    ]
})
export class DatepickerDocsModule {}
