import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, Injector, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {SearchTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-search',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IconModule, GenericPipe],
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
    @Input() testId: string;

    /** @internal */
    searchFormControl = new FormControl();
    /** @internal */
    onDestroy$ = new Subject<void>();
    /** @internal */
    searchIcon: IconData = {iconName: 'search-bold', iconVersion: 'v3'};
    /** @internal */
    clearIcon: IconData = {iconName: 'cancel', iconVersion: 'v3'};

    /** @internal */
    searchTestIdModifiers: typeof SearchTestIdModifiers = SearchTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    constructor(private injector: Injector) {}

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

    clearInput(withEvent = false): void {
        this.searchFormControl.setValue('', {emitEvent: withEvent});
        if (withEvent) {
            this.setFocus();
        }
    }

    private setFocus(): void {
        this.inputElRef.nativeElement.focus();
    }
}
