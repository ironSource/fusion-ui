import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabGroupComponent} from './tab-group/tab-group.component';
import {TabComponent} from './tab/tab.component';

@NgModule({
    declarations: [TabGroupComponent, TabComponent],
    exports: [TabGroupComponent, TabComponent],
    imports: [CommonModule]
})
export class TabsModule {}
