import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleButtonGroupColor, ToggleButtonGroupOption, ToggleButtonGroupSize} from './toggle-button-group.entities';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-toggle-button-group',
    imports: [CommonModule, IconModule, TooltipDirective],
    host: {class: 'fusion-v4'},
    templateUrl: './toggle-button-group.component.html',
    styleUrls: ['./toggle-button-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleButtonGroupComponent),
            multi: true
        }
    ]
})
export class ToggleButtonGroupComponent {
    @Input() name: string = 'fu-btn-grp-' + this.uniqueService.getUniqueId();
    @Input() options: ToggleButtonGroupOption[] = [];
    @Input() size: ToggleButtonGroupSize = 'medium';
    @Input() color: ToggleButtonGroupColor = 'default';
    // endregion

    /** @internal */
    selected: ToggleButtonGroupOption;

    tooltipConfiguration = {
        position: TooltipPosition.TopFixed
    };

    constructor(private uniqueService: UniqueIdService) {}

    /** @internal */
    setSelected(selected: ToggleButtonGroupOption): void {
        this.propagateTouched();
        this.selected = selected;
        this.propagateChange({...selected});
    }

    /** @internal */
    propagateChange = (_: ToggleButtonGroupOption) => {};
    /** @internal */
    propagateTouched = () => {};
    @Input() testId!: string;

    /** @internal */
    writeValue(value: ToggleButtonGroupOption): void {
        this.selected = value;
    }

    /** @ignore */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @ignore */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}
