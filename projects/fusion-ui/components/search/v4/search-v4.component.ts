import {ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent, InputSize} from '@ironsource/fusion-ui/components/input/v4';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {Subject} from 'rxjs';
import {defaultTestId} from 'projects/E2E/tests/components/dropdown/consts';
import {takeUntil} from 'rxjs/operators';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {InputTestIdModifiers, ModalTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-search',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, InputComponent, GenericPipe],
    host: {class: 'fusion-v4'},
    templateUrl: './search-v4.component.html',
    styleUrls: ['./search-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SearchV4Component), multi: true}]
})
export class SearchV4Component implements OnInit, OnDestroy {
    // region Inputs - placeholder
    @Input()
    set placeholder(value: string) {
        this._placeholder = value;
    }

    constructor(private injector: Injector) {}

    get placeholder() {
        return this._placeholder;
    }

    private _placeholder: string;
    // endregion
    // region Inputs - size
    @Input() set size(value: InputSize) {
        this._size = value;
    }

    get size() {
        return this._size;
    }

    private _size: InputSize = 'medium';
    // endregion

    /** @internal */
    searchIcon = 'ph/magnifying-glass';
    /** @internal */
    searchFormControl = new FormControl();
    /** @internal */
    onDestroy$ = new Subject<void>();

    ngOnInit() {
        this.searchFormControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.propagateTouched();
            this.propagateChange(value);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // region Implement ControlValueAccessor methods
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
    writeValue(value: string): void {
        this.searchFormControl.setValue(value, {emitEvent: false});
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
        if (disabled) {
            this.searchFormControl.disable();
        } else {
            this.searchFormControl.enable();
        }
    }

    // endregion
    protected readonly modalTestIdModifiers = ModalTestIdModifiers;
    testIdsService: TestIdsService = this.injector.get(TestIdsService);
    protected readonly InputTestIdModifiers = InputTestIdModifiers;
    testId: string = defaultTestId;
}
