import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleVersionButtonComponent} from './style-version-button.component';
import {SwitcherModule} from '@ironsource/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [StyleVersionButtonComponent],
    exports: [StyleVersionButtonComponent],
    imports: [CommonModule, ReactiveFormsModule, SwitcherModule]
})
export class StyleVersionButtonModule {}
