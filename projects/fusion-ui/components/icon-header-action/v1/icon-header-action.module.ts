import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconHeaderActionComponent} from './icon-header-action.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [IconHeaderActionComponent],
    exports: [IconHeaderActionComponent]
})
export class IconHeaderActionModule {}
