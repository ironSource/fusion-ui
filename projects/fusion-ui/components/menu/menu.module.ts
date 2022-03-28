import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {RouterModule} from '@angular/router';
import {MenuService} from './menu.service';
import {MenuListComponent} from './menu-list/menu-list.component';

@NgModule({
    declarations: [MenuComponent, MenuItemComponent, MenuListComponent],
    exports: [MenuComponent],
    imports: [CommonModule, IconModule, RouterModule],
    providers: [MenuService]
})
export class MenuModule {}
