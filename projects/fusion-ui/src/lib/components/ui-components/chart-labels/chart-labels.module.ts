import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartLabelsComponent} from './chart-labels.component';
import {IconModule} from '../icon/icon.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CheckboxModule} from '../checkbox/checkbox.module';

@NgModule({
    imports: [CommonModule, IconModule, ReactiveFormsModule, CheckboxModule],
    declarations: [ChartLabelsComponent],
    exports: [ChartLabelsComponent]
})
export class ChartLabelsModule {}
