import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownPlaceholder} from '@ironsource/fusion-ui/components/dropdown-select';
import {CountryCode, FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';
import {DropdownTestIdModifiers, GenericPipe, TestIdsService} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-dropdown-select',
    standalone: true,
    imports: [CommonModule, TooltipModule, IconModule, FlagComponent, GenericPipe],
    host: {class: 'fusion-v4'},
    templateUrl: './dropdown-select-v4.component.html',
    styleUrls: ['./dropdown-select-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownSelectV4Component {
    @Input() placeholder: DropdownPlaceholder = {value: 'Select'};
    @Input() isOpen: boolean = false;
    @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
    @Input() disabled: boolean = false;
    @Input() validationState: 'error' | 'warning' | 'success' | null = null;
    @Input() imageUrl: string;
    @Input() icon: string;
    @Input() iconColor: string;
    @Input() testId: string;
    @Input() country: CountryCode | string;
    testIdDropdownModifiers: typeof DropdownTestIdModifiers = DropdownTestIdModifiers;
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    constructor(private injector: Injector) {}
}
