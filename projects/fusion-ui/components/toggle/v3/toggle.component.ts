import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'fusion-toggle',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleComponent),
            multi: true
        }
    ]
})
export class ToggleComponent {
    private _error: string;
    @Input() set error(value: string) {
        this._error = value;
    }
    get error(): string {
        return this._error;
    }

    @Input() set disabled(value: boolean) {
        this.setDisabledState(value);
    }

    private _helper: string;
    @Input() set helper(value: string) {
        this._helper = value;
    }
    get helper(): string {
        return this._helper;
    }

    /** @internal */
    id: string;
    /** @internal */
    checked$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    /** @internal */
    disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private uniqueIdService: UniqueIdService) {
        this.id = `fuToggle_${this.uniqueIdService.getUniqueId()}`;
    }

    /** @ignore */
    change($event): void {
        this.propagateTouched();
        this.checked$.next($event.target.checked);
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
