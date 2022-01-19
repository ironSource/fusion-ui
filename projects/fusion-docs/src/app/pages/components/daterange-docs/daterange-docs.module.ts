import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DaterangeDocsComponent} from './daterange-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {CalendarModule, DaterangeModule} from '@ironource/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: DaterangeDocsComponent}];

@NgModule({
    declarations: [DaterangeDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        DocsMenuModule,
        ExampleBlockModule,
        CodeBlockModule,
        DaterangeModule,
        CalendarModule
    ]
})
export class DaterangeDocsModule {}
