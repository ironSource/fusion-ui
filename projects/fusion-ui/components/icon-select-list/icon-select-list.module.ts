import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconSelectListComponent} from './icon-select-list.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {RadioModule} from '@ironsource/fusion-ui/components/radio';

@NgModule({
    declarations: [IconSelectListComponent],
    imports: [CommonModule, IconModule, CheckboxModule, RadioModule],
    exports: [IconSelectListComponent]
})
export class IconSelectListModule {}
