import {Directive, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v1';
import {takeUntil} from 'rxjs/operators';
import {fromEvent, Subject} from 'rxjs';

@Directive()
export abstract class DropdownSearchBaseComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() autoComplete: boolean;
    @Input() search: boolean;
    @Input() placeholder = 'Search';
    @ViewChild('inputComponent', {static: true}) inputComponent: InputComponent;
    searchValue = new FormControl();

    onDestroy$ = new Subject<void>();

    constructor(protected elementRef: ElementRef) {}

    ngOnInit() {
        this.searchValue.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(newValue => {
            this.propagateChange(newValue);
        });
        fromEvent(this.elementRef.nativeElement, 'click')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((event: PointerEvent) => {
                event.stopPropagation();
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
