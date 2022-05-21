import {Directive, Input, OnInit, TemplateRef} from '@angular/core';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Directive({
    selector: '[fusionChipFilterContent]'
})
export class ChipFilterContentDirective implements OnInit {
    @Input() fusionChipFilterContent: ApiBase;

    constructor(private templateRef: TemplateRef<any>) {}
    ngOnInit() {
        this.fusionChipFilterContent.templateRef = this.templateRef;
    }
}
