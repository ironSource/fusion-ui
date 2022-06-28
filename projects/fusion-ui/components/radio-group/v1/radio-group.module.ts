import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioGroupComponent} from './radio-group.component';
import {RadioModule} from '@ironsource/fusion-ui/components/radio/v1';

@NgModule({
    declarations: [RadioGroupComponent],
    exports: [RadioGroupComponent],
    imports: [RadioModule, CommonModule]
})
export class RadioGroupModule {}
