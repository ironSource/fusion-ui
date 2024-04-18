import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextareaV4Component} from './textarea-v4.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [TextareaV4Component],
    exports: [TextareaV4Component],
    imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class TextareaModule {}
