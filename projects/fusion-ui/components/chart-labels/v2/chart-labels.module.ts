import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartLabelsComponent} from './chart-labels.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';

@NgModule({
    imports: [CommonModule, IconModule, ReactiveFormsModule, CheckboxModule],
    declarations: [ChartLabelsComponent],
    exports: [ChartLabelsComponent]
})
export class ChartLabelsModule {}
