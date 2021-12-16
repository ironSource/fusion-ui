import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-dropdown-custom-placeholder',
    templateUrl: './dropdown-custom-placeholder.component.html',
    styleUrls: ['./dropdown-custom-placeholder.component.scss']
})
export class DropdownCustomPlaceholderComponent {
    @Input() set text(value: string) {
        this.placeholderText = value;
    }

    placeholderText: string;
}
