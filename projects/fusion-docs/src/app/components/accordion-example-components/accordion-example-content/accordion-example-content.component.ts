import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-accordion-example-opened',
    templateUrl: './accordion-example-content.component.html',
    styleUrls: ['./accordion-example-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccordionExampleContentComponent {
    @Input() textContent: string;
    @Input() iconPosition = 'right';
}
