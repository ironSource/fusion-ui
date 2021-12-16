import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleComponent} from './toggle.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ToggleComponent],
    exports: [ToggleComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    entryComponents: [ToggleComponent]
})
export class ToggleModule {}
