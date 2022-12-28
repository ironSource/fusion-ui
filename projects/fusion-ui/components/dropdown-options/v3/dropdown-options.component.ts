import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list';

@Component({
    selector: 'fusion-dropdown-options',
    templateUrl: './dropdown-options.component.html',
    styleUrls: ['./dropdown-options.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, DropdownOptionsListModule]
})
export class DropdownOptionsComponent {
    @Input() displayedOptions: DropdownOption[];
    /** @internal */
    @Input() isMultiRawDisplay = false;
    /** @internal */
    @Input() mappingOptions: any;
    @Input() selected: DropdownOption[];
    /** @internal */
    @Input() lastSearchValue: string;
    /** @internal */
    @Input() optionRightHoverText: string;
    @Input() optionCloseIcon: boolean;

    /** @internal */
    @Output() scroll = new EventEmitter();
    /** @internal */
    @Output() closeIconClicked = new EventEmitter();
    /** @internal */
    @Output() changeSelected = new EventEmitter();
}
