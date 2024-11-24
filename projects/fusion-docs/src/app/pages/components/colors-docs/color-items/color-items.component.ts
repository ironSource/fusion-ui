import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-color-items',
    templateUrl: './color-items.component.html',
    styleUrls: ['./color-items.component.scss', '../colors-docs.component.scss'],
    standalone: false
})
export class ColorItemsComponent {
    @Input() colorSamples: any;
}
