import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'fusion-accordion-content',
    templateUrl: './accordion-content.component.html',
    styleUrls: ['./accordion-content.component.scss']
})
export class AccordionContentComponent {
    @Input() text: string;
    @Input() iconPosition = 'right';
}
