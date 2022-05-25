import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

@Directive()
export abstract class RadioBaseComponent implements OnInit, ControlValueAccessor {
    @Input() name: string;
    @Input() isDisabled: boolean;
    @Input() checked: boolean;
    @Input() value: string;
    @Input() label: string;
    @Input() icon: IconData;
    @Input() tooltip: string;
    @Output() changed = new EventEmitter();
    private selectedValue: string;
    id: string;

    constructor(private uidService: UniqueIdService, private elRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        const grUniq = this.uidService.getUniqueId();
        this.name = this.name || '';
        this.id = 'fu-rb-' + grUniq;
        this.label = this.label || '';
        this.value = this.value ?? this.id;
    }

    genElementId() {
        return this.name + '_' + this.value;
    }

    onChanged() {
        this.propagateTouched();
        this.propagateChange(this.value);
        this.changed.emit(this.value);
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     */
    propagateChange = (_: any) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     */
    writeValue(value: string): void {
        if (value === undefined || value === null) {
            this.selectedValue = '';
        } else {
            this.selectedValue = value;
        }
        if (isNullOrUndefined(this.checked)) {
            this.checked = this.value === this.selectedValue;
        }
        this.elRef.nativeElement.querySelector('input').checked = this.checked;

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * on click
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
