import {EventEmitter, Input, OnInit, Output, ChangeDetectorRef, Directive} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {RadioGroupOptions} from '@ironsource/fusion-ui/components/radio-group/common/entities';

@Directive()
export abstract class RadioGroupBaseComponent implements OnInit, ControlValueAccessor {
    /**
     * radio buttons group name
     */
    @Input() name: string;
    /**
     * radiobutton inline direction
     */
    @Input() inline: boolean;
    /**
     * disabled (all group)
     */
    @Input() isDisabled: boolean;
    /**
     * radiobutton option: interface RadioGroupOptions {
     *     id: string | number;
     *     label: string;
     *     icon?: IconData;
     *     tooltip?: string;
     *     disabled?: boolean;
     * }
     */
    @Input() options: RadioGroupOptions[]; // options
    /** @internal */
    @Input() selected: any; // selected option
    /** @internal */
    @Output() selectedChange = new EventEmitter();
    /** @internal */
    id: string; // radio buttons group id

    constructor(private uniqueIdService: UniqueIdService, protected logService: LogService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        const grUniq = this.uniqueIdService.getUniqueId();
        this.name = 'is-rbgroup-' + (this.name || grUniq);
        this.id = 'is-rbgroup-' + grUniq;
        this.inline = this.inline || false;

        // check and prepere options for render
        this.options = this.options || [];
        // in case selected not arrived with options
        if (!this.selected) {
            this.selected = this.options.length !== 0 ? this.options[0] : null;
            this.setSelected(this.selected);
        } else {
            // check that selected in options
            const selFound = this.options.find(item => {
                return item.id === this.selected.id;
            });
            if (!selFound) {
                // set err message
                this.logService.error(new Error('Selected option not part of options'));
            }
        }
    }

    /** @internal */
    isSelected(option) {
        return option === this.selected || (option && this.selected && option.id === this.selected.id);
    }
    /** @internal */
    setSelected(selectedValue: any) {
        this.selected = this.options.find(item => item.id === selectedValue);
        this.selectedChange.emit(this.selected);
        this.propagateChange(this.selected);
    }

    /**
     * Method to call when value has changes.
     * @internal
     */
    propagateChange = (_: any) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     * @internal
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     * @internal
     */
    writeValue(value: string): void {
        this.selected = value;
        this.cdr.markForCheck();
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     * @internal
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * on click
     * @internal
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     * @internal
     */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
