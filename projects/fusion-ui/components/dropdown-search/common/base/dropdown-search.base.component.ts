import {Directive, HostListener, Injector, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {InputComponent} from '@ironsource/fusion-ui';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Directive()
export abstract class DropdownSearchBaseComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() autoComplete: boolean;
    @Input() search: boolean;
    @Input() placeholder = 'Search';
    @ViewChild('inputComponent', {static: true}) inputComponent: InputComponent;
    searchValue = new FormControl();

    /**
     * Suppress mouse click event
     * (in case that search placed in drop-down )
     */
    @HostListener('click', ['$event'])
    public onClick(event: any): void {
        event.stopPropagation();
    }

    onDestroy$ = new Subject<void>();

    ngOnInit() {
        this.searchValue.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(newValue => {
            this.propagateChange(newValue);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /**
     * Method to call when the component value has changes.
     */
    propagateChange = (_: string) => {};

    /**
     * update value from model to the component
     */
    writeValue(value: string): void {
        this.searchValue.patchValue(value);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void {}

    setDisabledState?(isDisabled: boolean): void {
        const state = isDisabled ? 'disable' : 'enable';
        this.searchValue[state]();
    }
}
