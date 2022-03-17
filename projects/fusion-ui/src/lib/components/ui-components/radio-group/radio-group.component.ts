import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    forwardRef,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
    ChangeDetectorRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {LogService, UniqueIdService} from '@ironsource/fusion-ui/services';
import {RadioGroupOptions} from './radio-group.entities';

@Component({
    selector: 'fusion-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true
        }
    ]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {
    @Input() name: string; // radio buttons group name
    @Input() inline: boolean; // is inline
    @Input() isDisabled: boolean; // is disabled (all group) but can be some of options
    @Input() options: Array<RadioGroupOptions>; // options
    @Input() selected: any; // selected option
    @Output() selectedChange = new EventEmitter();
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

    isSelected(option) {
        return option === this.selected || (option && this.selected && option.id === this.selected.id);
    }

    setSelected(selectedValue: any) {
        this.selected = this.options.find(item => item.id === selectedValue);
        this.selectedChange.emit(this.selected);
        this.propagateChange(this.selected);
    }

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
        this.selected = value;
        this.cdr.markForCheck();
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
