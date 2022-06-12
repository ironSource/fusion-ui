import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartLabelsComponent} from './chart-labels.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ReactiveFormsModule} from '@angular/forms';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v2';

@NgModule({
    imports: [CommonModule, IconModule, ReactiveFormsModule, CheckboxModule],
    declarations: [ChartLabelsComponent],
    exports: [ChartLabelsComponent]
})
export class ChartLabelsModule {}
