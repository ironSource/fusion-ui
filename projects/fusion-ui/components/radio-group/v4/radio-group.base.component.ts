import {EventEmitter, Input, OnInit, Output, ChangeDetectorRef, Directive} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {RadioGroupOptions} from '@ironsource/fusion-ui/components/radio-group/common/entities';

@Directive()
export abstract class RadioGroupBaseComponent implements OnInit, ControlValueAccessor {
    /** @internal */
    id: string; // radio buttons group id

    /**
     * radio buttons group name
     */
    @Input() set name(value: string) {
        this._name = value;
    }
    /**
     * radiobutton inline direction
     */
    @Input() inline = false;
    /**
     * disabled (all group)
     */
    @Input() set disabled(value: boolean) {
        this._disabled = value;
    }
    /**
     * radiobutton option: interface RadioGroupOptions {
     *     id: string | number;
     *     label: string;
     *     icon?: IconData;
     *     tooltip?: string;
     *     disabled?: boolean;
     * }
     */
    @Input() set options(value: RadioGroupOptions[]) {
        this._options = value;
    }
    /** @internal */
    @Output() selectedChange = new EventEmitter();

    get name(): string {
        return this._name;
    }
    get disabled(): boolean {
        return this._disabled;
    }
    get options(): RadioGroupOptions[] {
        return this._options;
    }
    get selected(): RadioGroupOptions {
        return this._selected;
    }

    private _name: string;
    private _disabled = false;
    private _options: RadioGroupOptions[] = [];
    private _selected: RadioGroupOptions;

    constructor(private uniqueIdService: UniqueIdService) {}

    ngOnInit() {
        const grUniq = this.uniqueIdService.getUniqueId();
        this.name = 'is-rbgroup-' + (this.name || grUniq);
        this.id = 'is-rbgroup-' + grUniq;
    }
    /** @internal */
    isSelected(option: RadioGroupOptions) {
        return option === this.selected || option?.id === this.selected?.id;
    }
    /** @internal */
    setSelected(radioValue: string | number, option: RadioGroupOptions) {
        this._selected = option;
        this.selectedChange.emit(this.selected);
        this.propagateChange(this.selected);
    }

    /**
     * Method to call when value has changes.
     * @internal
     */
    propagateChange = (_: RadioGroupOptions) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     * @internal
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     * @internal
     */
    writeValue(value: RadioGroupOptions): void {
        this._selected = value;
        if (this._selected?.disabled) {
            this._disabled = true;
        }
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
        this._disabled = isDisabled;
    }
}
