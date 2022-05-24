import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {RouterModule} from '@angular/router';
import {MenuListComponent} from './components/menu-list/menu-list.component';
import {MenuService} from '@ironsource/fusion-ui/components/menu/common/base';

@NgModule({
    declarations: [MenuComponent, MenuItemComponent, MenuListComponent],
    exports: [MenuComponent],
    imports: [CommonModule, IconModule, RouterModule],
    providers: [MenuService]
})
export class MenuModule {}
