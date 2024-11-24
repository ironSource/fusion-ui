import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-accordion-header',
    templateUrl: './accordion-header.component.html',
    styleUrls: ['./accordion-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccordionHeaderComponent {
    @Input() isOpen: boolean;
    @Input() text: string;
    @Input() iconPosition = 'right';
}
