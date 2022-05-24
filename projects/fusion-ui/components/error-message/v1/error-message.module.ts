import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageComponent} from './error-message.component';
import {ErrorMessageDirective} from './error-message.directive';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [ErrorMessageDirective, ErrorMessageComponent],
    exports: [ErrorMessageDirective]
})
export class ErrorMessageModule {}
