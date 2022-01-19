import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocsMenuComponent} from './docs-menu.component';
import {ScrollToModule} from '@ironsource/fusion-uifusion-ui';

@NgModule({
    declarations: [DocsMenuComponent],
    exports: [DocsMenuComponent],
    imports: [CommonModule, ScrollToModule]
})
export class DocsMenuModule {}
