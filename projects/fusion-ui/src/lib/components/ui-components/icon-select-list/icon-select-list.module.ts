import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconSelectListComponent} from './icon-select-list.component';
import {IconModule} from '../icon/icon.module';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {RadioModule} from '../radio/radio.module';

@NgModule({
    declarations: [IconSelectListComponent],
    imports: [CommonModule, IconModule, CheckboxModule, RadioModule],
    exports: [IconSelectListComponent],
    entryComponents: [IconSelectListComponent]
})
export class IconSelectListModule {}
