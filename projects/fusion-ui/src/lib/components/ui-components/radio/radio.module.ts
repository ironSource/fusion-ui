import {TooltipModule} from './../tooltip/tooltip.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from './radio.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [RadioComponent],
    exports: [RadioComponent],
    imports: [CommonModule, IconModule, TooltipModule]
})
export class RadioModule {}
