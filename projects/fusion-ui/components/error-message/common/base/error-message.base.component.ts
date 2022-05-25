import {Directive, Input} from '@angular/core';

@Directive()
export abstract class ErrorMessageBaseComponent {
    @Input() showError: boolean;
    @Input() errorMessage: string;
    @Input() styles: any;
}
