import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatepickerDocsRoutingModule} from './datepicker-docs-routing.module';
import {DatepickerDocsComponent} from './datepicker-docs.component';
import {DatepickerModule} from '@ironsource/fusion-ui';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DatepickerDocsComponent],
    imports: [
        CommonModule,
        DatepickerDocsRoutingModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ReactiveFormsModule,
        DatepickerModule
    ]
})
export class DatepickerDocsModule {}
