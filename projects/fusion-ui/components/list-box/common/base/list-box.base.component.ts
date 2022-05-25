import {ChangeDetectorRef, Input, OnInit, Directive, Injector} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {ListBoxOption} from './entities/list-box-option';
import {ControlValueAccessor} from '@angular/forms';
import {ListBoxModes} from './entities/list-box-modes';
import {detectChangesDecorator} from '@ironsource/fusion-ui/decorators';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

@Directive()
export abstract class ListBoxBaseComponent implements OnInit, ControlValueAccessor {
    options: ListBoxOption[];
    isDisabled: boolean;
    @Input() mappingOptions: any = {id: 'id', displayText: 'displayText'};
    @Input() id: number | string;
    @Input() mode: ListBoxModes;
    @Input() title: string;
    // for native;
    @Input() set disabled(value: boolean) {
        this.setDisabledState(value);
    }

    checkIconName: IconData;
    removeIconName: IconData;

    constructor(protected injector: Injector, protected cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.mappingOptions = {
            id: this.mappingOptions && this.mappingOptions.id ? this.mappingOptions.id : 'id',
            displayText: this.mappingOptions && this.mappingOptions.displayText ? this.mappingOptions.displayText : 'displayText'
        };

        this.mode = this.mode || ListBoxModes.Regular;
    }

    trackByOption(index, option) {
        return option ? option.id : index;
    }

    @detectChangesDecorator
    removeOption(item, $event) {
        this.options.splice(this.options.indexOf(item), 1);
        this.propagateChange(this.options);
        if ($event) {
            $event.stopPropagation();
        }
        // this.cdr.markForCheck();
    }

    // Implement ControlValueAccessor methods
    writeValue(value: any): void {
        if (isNullOrUndefined(value) || (Array.isArray(value) && value.length === 0)) {
            this.options = [];
        } else {
            this.options = Array.isArray(value) ? value : [value];
        }

        // creating new instance does not trigger change, so alert manually value changed
        if (!(this.cdr as any).destroyed) {
            this.cdr.detectChanges();
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void {}

    propagateChange = (_: ListBoxOption[]) => {};

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;

        // the above line does not trigger change, so alert manually value changed
        this.cdr.detectChanges();
    }
}
