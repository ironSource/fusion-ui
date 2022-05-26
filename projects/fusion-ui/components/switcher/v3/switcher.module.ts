import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitcherComponent} from './switcher.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [SwitcherComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [SwitcherComponent]
})
export class SwitcherModule {}
