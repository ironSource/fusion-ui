import {ChangeDetectionStrategy, Component, Input, forwardRef, OnDestroy} from '@angular/core';
import {InputSize} from '@ironsource/fusion-ui/components/input/common/base';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-header',
    templateUrl: './dropdown-dual-multi-select-header.component.html',
    styleUrls: ['./dropdown-dual-multi-select-header.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownDualMultiSelectHeaderComponent),
            multi: true
        }
    ]
})
export class DropdownDualMultiSelectHeaderComponent implements OnDestroy, ControlValueAccessor {
    @Input() title: string;
    /** @internal */
    @Input() testId: string;

    inputSize = InputSize;
    searchControl = new FormControl();

    private onDestroy$ = new Subject<void>();

    constructor() {}

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    writeValue(value: string): void {
        this.searchControl.patchValue(value, {emitEvent: false});
    }

    registerOnChange(fn: any): void {
        this.searchControl.valueChanges.pipe(takeUntil(this.onDestroy$), debounceTime(150), distinctUntilChanged()).subscribe(fn);
    }

    registerOnTouched(): void {}
}
