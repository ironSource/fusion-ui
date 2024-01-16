import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownPlaceholder} from '@ironsource/fusion-ui/components/dropdown-select';
import {CountryCode, FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';

@Component({
    selector: 'fusion-dropdown-select',
    standalone: true,
    imports: [CommonModule, TooltipModule, IconModule, FlagComponent],
    host: {class: 'fusion-v4'},
    templateUrl: './dropdown-select-v4.component.html',
    styleUrls: ['./dropdown-select-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownSelectV4Component {
    @Input() placeholder: DropdownPlaceholder = {value: 'Select'};
    @Input() isOpen: boolean = false;
    @Input() size: 'small' | 'medium' | 'large' = 'small';
    @Input() disabled: boolean = false;
    @Input() validationState: 'error' | 'warning' | 'success' | null = null;
    @Input() imageUrl: string;
    @Input() icon: string;
    @Input() country: CountryCode | string;
}
