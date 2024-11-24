import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-accordion-content',
    templateUrl: './accordion-content.component.html',
    styleUrls: ['./accordion-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccordionContentComponent {
    @Input() text: string;
    @Input() iconPosition = 'right';
}
