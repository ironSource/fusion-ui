import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-accordion-header',
    templateUrl: './accordion-header.component.html',
    styleUrls: ['./accordion-header.component.scss']
})
export class AccordionHeaderComponent {
    @Input() isOpen: boolean;
    @Input() text: string;
    @Input() iconPosition = 'right';
}
