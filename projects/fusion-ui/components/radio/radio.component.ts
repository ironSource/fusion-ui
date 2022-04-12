import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/fusion-base';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Component({
    selector: 'fusion-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss', './radio.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent extends FusionBaseComponent implements OnInit, ControlValueAccessor, OnDestroy {
    @Input() name: string;
    @Input() isDisabled: boolean;
    @Input() checked: boolean;
    @Input() value: string;
    @Input() label: string;
    @Input() icon: string | IconData;
    @Input() tooltip: string;
    @Output() changed = new EventEmitter();
    private selectedValue: string;
    id: string;

    constructor(
        injector: Injector,
        private uidService: UniqueIdService,
        private elRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        super(injector);
    }

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
