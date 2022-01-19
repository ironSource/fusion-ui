import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItemExampleComponent} from './menu-item-example.component';
import {ToggleModule} from '@ironsource/fusion-uifusion-ui';

@NgModule({
    declarations: [MenuItemExampleComponent],
    imports: [CommonModule, ToggleModule]
})
export class MenuItemExampleModule {}
