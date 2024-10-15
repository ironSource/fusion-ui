import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-exml-for-tooltip',
    standalone: true,
    imports: [],
    templateUrl: './exml-for-tooltip.component.html',
    styleUrl: './exml-for-tooltip.component.scss'
})
export class ExmlForTooltipComponent {
    @Input() ppid: string;
}
