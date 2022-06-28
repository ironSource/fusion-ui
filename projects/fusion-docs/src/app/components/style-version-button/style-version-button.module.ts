import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleVersionButtonComponent} from './style-version-button.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SwitcherModule} from '@ironsource/fusion-ui/components/switcher/v1';

@NgModule({
    declarations: [StyleVersionButtonComponent],
    exports: [StyleVersionButtonComponent],
    imports: [CommonModule, ReactiveFormsModule, SwitcherModule]
})
export class StyleVersionButtonModule {}
