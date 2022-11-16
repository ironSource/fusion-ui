import {ChangeDetectorRef, Directive, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

@Directive()
export abstract class CheckboxBaseComponent implements OnInit, ControlValueAccessor {
    @Input() label: string;
    /** @internal */
    @Input() name: string;
    /** @internal */
    @Input() value: string;
    @Input() icon: IconData;
    @Input() flag: string;
    @Input() isDisabled: boolean;
    /** @internal */
    @Input() checked: boolean;
    @Input() isIndeterminate: boolean;
    /** checkbox DOM element id. If not set, will be generated. */
    @Input() id: string;
    /** slass will be added to the checkbox label */
    @Input() class: string;
    /** custom fill color for checked or indeterminate stated*/
    @Input() backgroundColor: string;
    /** @internal */
    @Input() tooltipContent: string;
    /** @internal */
    @Input() tooltipWidth: number;
    /** @internal */
    @Output() changed = new EventEmitter();
    /** @internal */
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

    /** @ignore */
    change(event: any): void {
        this.propagateTouched();
        this.checked = event.target.checked;
        this.propagateChange(this.checked);
        this.changed.emit(this.checked);
    }

    // Implement ControlValueAccessor methods
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
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
        this.cd.detectChanges();
    }
}
