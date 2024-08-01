import {ChangeDetectionStrategy, Component, forwardRef, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ToggleTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {InputHelperComponent} from '@ironsource/fusion-ui/components/input-helper/v4';
import {InputVariant} from '@ironsource/fusion-ui/components/input/v4';
import {GenericPipe} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-toggle',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IconModule, TooltipDirective, InputHelperComponent, GenericPipe],
    templateUrl: './toggle-v4.component.html',
    styleUrl: './toggle-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleV4Component),
            multi: true
        }
    ]
})
export class ToggleV4Component {
    private uniqueIdService: UniqueIdService = inject(UniqueIdService);

    @Input() id: string = `fuToggle_${this.uniqueIdService.getUniqueId()}`;

    // region label
    @Input() labelText?: string;
    @Input() labelHelpIcon?: IconData;
    @Input() labelTooltipText?: string;
    @Input() labelTooltipConfiguration?: tooltipConfiguration;
    // endregion

    // region Helper
    @Input() helperText: string;
    @Input() helperIcon: string;
    @Input() helperVariant: InputVariant = 'default';
    // endregion

    // region icons
    @Input() startIcon?: IconData;
    @Input() endIcon?: IconData;
    // endregion

    // region variants and state
    @Input() color: 'primary' | 'test' = 'primary';
    @Input() size: 'small' | 'medium' = 'small';
    @Input() set loading(value: boolean) {
        this.loading$.next(value);
    }
    @Input() set disabled(value: boolean) {
        this.disabled$.next(value);
    }
    // endregion

    // region testId
    @Input() testId?: string;
    /** @internal */
    testIdToggleModifiers: typeof ToggleTestIdModifiers = ToggleTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);
    // endregion

    // region common states
    /** @internal */
    loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    /** @internal */
    checked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    /** @internal */
    disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // endregion

    /** @ignore */
    change($event: Event): void {
        this.propagateTouched();
        this.checked$.next(($event.target as HTMLInputElement).checked);
        this.propagateChange(this.checked$.getValue());
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     * @ignore
     */
    propagateChange = (_: boolean) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     * @ignore
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     * @ignore
     */
    writeValue(value: boolean): void {
        this.checked$.next(!!value);
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     * @ignore
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * on click
     * @ignore
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     * @ignore
     */
    setDisabledState?(disabled: boolean): void {
        this.disabled$.next(disabled);
    }
}
