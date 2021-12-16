import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioGroupComponent} from './radio-group.component';
import {RadioModule} from '../radio/radio.module';

@NgModule({
    declarations: [RadioGroupComponent],
    exports: [RadioGroupComponent],
    imports: [RadioModule, CommonModule],
    entryComponents: [RadioGroupComponent]
})
export class RadioGroupModule {}
