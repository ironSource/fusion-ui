import {Directive, TemplateRef, Input} from '@angular/core';

@Directive({
    selector: '[fusionExampleBlock]',
    standalone: false
})
export class ExampleBlockDirective {
    @Input() fusionExampleBlock: string;
    @Input() customHeader: string;

    constructor(public templateRef: TemplateRef<any>) {}
}
