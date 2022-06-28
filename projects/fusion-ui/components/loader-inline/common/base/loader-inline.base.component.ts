import {Directive, Input} from '@angular/core';

@Directive()
export abstract class LoaderInlineBaseComponent {
    @Input() status: boolean;
    @Input() text: string;
    @Input() color: 'grey' | 'blue' | 'white' = 'grey';
}
