import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from '@ironsource/fusion-ui/components/search/v4';
import {DropdownSearchBaseComponent} from '@ironsource/fusion-ui/components/dropdown-search/common/base';

@Component({
    selector: 'fusion-dropdown-search',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, SearchComponent],
    host: {class: 'fusion-v4'},
    templateUrl: './dropdown-search-v4.component.html',
    styleUrls: ['./dropdown-search-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownSearchV4Component),
            multi: true
        }
    ]
})
export class DropdownSearchV4Component extends DropdownSearchBaseComponent {
    /*  @Input() placeholder: string = '';
    /!** @internal *!/
    searchValue = new FormControl();

    // region form accessor methods
    /!**
     * Method to call when the component value has changes.
     * @internal
     *!/
    propagateChange = (_: string) => {};

    /!**
     * update value from model to the component
     * @internal
     *!/
    writeValue(value: string): void {
        this.searchValue.patchValue(value);
    }

    /!** @internal *!/
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /!** @internal *!/
    registerOnTouched(): void {}

    /!** @internal *!/
    setDisabledState?(isDisabled: boolean): void {
        const state = isDisabled ? 'disable' : 'enable';
        this.searchValue[state]();
    }
    // endregion*/
}
