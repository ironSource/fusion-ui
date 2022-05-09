import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './tabs.component';
import {TabModule} from './tab/tab.module';
import {PopupModule} from '@ironsource/fusion-ui/components/popup';

@NgModule({
    declarations: [TabsComponent],
    imports: [CommonModule, TabModule, PopupModule],
    exports: [TabsComponent]
})
export class TabsModule {}
