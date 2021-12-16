import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleVersionButtonComponent} from './style-version-button.component';
import {ButtonModule} from '@ironsrc/fusion-ui';

@NgModule({
    declarations: [StyleVersionButtonComponent],
    exports: [StyleVersionButtonComponent],
    entryComponents: [StyleVersionButtonComponent],
    imports: [CommonModule, ButtonModule]
})
export class StyleVersionButtonModule {}
