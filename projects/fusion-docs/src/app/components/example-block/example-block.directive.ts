import {Directive, TemplateRef, Input} from '@angular/core';

@Directive({
    selector: '[fusionExampleBlock]'
})
export class ExampleBlockDirective {
    @Input() fusionExampleBlock: string;
    @Input() customHeader: string;

    constructor(public templateRef: TemplateRef<any>) {}
}
