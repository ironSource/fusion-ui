import {ChangeDetectorRef, Directive, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Directive()
export abstract class CheckboxBaseComponent implements OnInit, ControlValueAccessor {
    @Input() label: string;
    @Input() name: string;
    @Input() value: string;
    @Input() icon: IconData;
    @Input() flag: string;
    @Input() isDisabled: boolean;
    @Input() checked: boolean;
    @Input() isIndeterminate: boolean;
    @Input() id: string;
    @Input() class: string;
    @Input() backgroundColor: string;
    @Input() tooltipContent: string;
    @Input() tooltipWidth: number;
    @Output() changed = new EventEmitter();
    @HostBinding('class.only-checkbox') isOnlyCheckbox = false;

    get toolTip(): string {
        return this.tooltipContent ? this.tooltipContent : this.class && this.class.indexOf('truncate') > -1 ? this.label : '';
    }

    constructor(private uniqueIdService: UniqueIdService, private cd: ChangeDetectorRef, protected sanitizer: DomSanitizer) {}

    ngOnInit() {
        const unique = this.uniqueIdService.getUniqueId();
        this.id = this.id || 'is-checkboxes-' + unique;
        this.checked = this.checked || false;
        this.isDisabled = this.isDisabled || false;
        this.label = this.label || '';
        this.value = this.value || '';
        this.isOnlyCheckbox = !this.label && !this.icon && !this.flag;
    }

    change(event: any): void {
        this.propagateTouched();
        this.checked = event.target.checked;
        this.propagateChange(this.checked);
        this.changed.emit(this.checked);
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     */
    propagateChange = (_: boolean) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     */
    writeValue(value: boolean): void {
        if (value === undefined || value === null) {
            this.checked = false;
        } else {
            this.checked = value;
        }
        if (!(this.cd as any).destroyed) {
            this.cd.detectChanges();
        }
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
