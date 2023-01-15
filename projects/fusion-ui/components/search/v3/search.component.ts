import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IconModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchComponent),
            multi: true
        }
    ]
})
export class SearchComponent implements OnInit, OnDestroy {
    /** @internal */
    @ViewChild('input') inputElRef: ElementRef;

    private _placeholder = 'Search';
    @Input()
    set placeholder(value: string) {
        if (!isNullOrUndefined(value)) {
            this._placeholder = value;
        }
    }
    get placeholder(): string {
        return this._placeholder;
    }

    private _showClearIcon = true;
    @Input()
    set showClearIcon(value: boolean) {
        this._showClearIcon = value;
    }
    get showClearIcon(): boolean {
        return this._showClearIcon;
    }

    /** @internal */
    searchFormControl = new FormControl();
    /** @internal */
    onDestroy$ = new Subject<void>();
    /** @internal */
    searchIcon: IconData = {iconName: 'search-bold', iconVersion: 'v3'};
    /** @internal */
    clearIcon: IconData = {iconName: 'cancel', iconVersion: 'v3'};

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
        if (isNullOrUndefined(value)) {
            this.clearInput();
        } else {
            this.searchFormControl.setValue(value, {emitEvent: false});
        }
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

    private clearInput(withEvent = false): void {
        this.searchFormControl.setValue('', {emitEvent: withEvent});
        if (withEvent) {
            this.setFocus();
        }
    }

    private setFocus(): void {
        this.inputElRef.nativeElement.focus();
    }
}
