import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WrapperService} from './wrapper.service';

@NgModule({
    declarations: [WrapperComponent],
    exports: [WrapperComponent],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [WrapperService]
})
export class WrapperModule {}
