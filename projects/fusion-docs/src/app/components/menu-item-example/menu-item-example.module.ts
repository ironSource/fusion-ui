import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItemExampleComponent} from './menu-item-example.component';
import {ToggleModule} from '@ironource/fusion-ui';

@NgModule({
    declarations: [MenuItemExampleComponent],
    imports: [CommonModule, ToggleModule]
})
export class MenuItemExampleModule {}
