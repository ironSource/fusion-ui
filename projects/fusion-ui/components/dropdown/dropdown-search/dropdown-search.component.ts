import {ChangeDetectionStrategy, Component, forwardRef, HostListener, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {InputComponent} from '@ironsource/fusion-ui/components/input';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-dropdown-search',
    templateUrl: './dropdown-search.component.html',
    styleUrls: ['./dropdown-search.component.scss', './dropdown-search.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownSearchComponent),
            multi: true
        }
    ]
})
export class DropdownSearchComponent extends FusionBaseComponent implements OnInit, ControlValueAccessor {
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

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.searchValue.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(newValue => {
            this.propagateChange(newValue);
        });
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
