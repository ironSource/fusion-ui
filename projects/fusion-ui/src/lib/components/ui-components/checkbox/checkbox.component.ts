import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    HostBinding,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UniqueIdService} from '../../../services/unique-id/unique-id.service';
import {StyleBase} from '../../style/style-base';
import {StyleVersion} from '../../../services/version/style-version.enum';
import {BASE_CHECKED_IMAGE} from './checkbox.cusom-svg';
import {DomSanitizerService} from '../../../services/dom-sanitizer/dom-sanitizer.service';

@Component({
    selector: 'fusion-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss', './checkbox.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})
export class CheckboxComponent extends StyleBase implements OnInit, ControlValueAccessor, OnDestroy {
    @Input() label: string;
    @Input() name: string;
    @Input() value: string;
    @Input() icon: string | {iconName: string; iconVersion?: string};
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

    constructor(
        injector: Injector,
        private uniqueIdService: UniqueIdService,
        private cd: ChangeDetectorRef,
        private sanitizerService: DomSanitizerService
    ) {
        super(injector);
    }

    ngOnInit() {
        const unique = this.uniqueIdService.getUniqueId();
        this.id = this.id || 'is-checkboxes-' + unique;
        this.checked = this.checked || false;
        this.isDisabled = this.isDisabled || false;
        this.label = this.label || '';
        this.value = this.value || '';
        this.isOnlyCheckbox = !this.label && !this.icon && !this.flag;
    }

    getBackgroundImage(styleVersion: StyleVersion) {
        let svg;
        if (this.backgroundColor && (this.checked || this.isIndeterminate)) {
            const baseSvg = styleVersion === StyleVersion.V2 ? BASE_CHECKED_IMAGE.style_v2 : BASE_CHECKED_IMAGE.style_v1;
            svg = this.sanitizerService.bypassSanitizationTrustStyle(
                `url("data:image/svg+xml,${encodeURIComponent(
                    baseSvg[this.isIndeterminate ? 'indeterminate' : 'checked'].replace('{backgroundColor}', this.backgroundColor)
                )}") left top no-repeat`
            );
        }

        return svg;
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
