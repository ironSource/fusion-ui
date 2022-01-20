import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleVersionButtonComponent} from './style-version-button.component';
import {ButtonModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [StyleVersionButtonComponent],
    exports: [StyleVersionButtonComponent],
    imports: [CommonModule, ButtonModule]
})
export class StyleVersionButtonModule {}
