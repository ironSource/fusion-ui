import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Injector,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {UniqueIdService} from '../../../services/unique-id/unique-id.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject, of} from 'rxjs';
import {StyleBase} from '../../style/style-base';
import {delay, startWith} from 'rxjs/operators';
import {isString} from '../../../utils';
import {ToggleLabel} from './toggle.config';
import {DomSanitizerService} from '../../../services/dom-sanitizer/dom-sanitizer.service';

@Component({
    selector: 'fusion-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss', './toggle.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleComponent),
            multi: true
        }
    ]
})
export class ToggleComponent extends StyleBase implements OnInit, ControlValueAccessor {
    @Input()
    set label(label: ToggleLabel) {
        this._label = label;
        this.setLabel(this._label);
    }

    get label(): ToggleLabel {
        return this._label;
    }

    @Input() value: string;
    @Input() name: string;

    @Input() set isDisabled(value: boolean) {
        this.isDisabled$.next(value);
    }

    @Input() loading: boolean;
    @Input() model = false;
    @Input() size: 'medium' | 'small' = 'medium';
    @Input() customCheckedBackgroundColor: string;
    @Output() modelChange = new EventEmitter();

    @HostBinding('attr.style')
    public get customBGColor(): any {
        return !!this.customCheckedBackgroundColor
            ? this.sanitizerService.bypassSanitizationTrustStyle(`--checked-bg-color: ${this.customCheckedBackgroundColor}`)
            : this.elementRef.nativeElement.getAttribute('style');
    }

    id: string;
    isChecked$ = new BehaviorSubject<boolean>(false);
    isDisabled$ = new BehaviorSubject<boolean>(false);
    currentLabel: string;
    _label: ToggleLabel;
    /**
     * fix for issue https://github.com/ironSource/fusion-ui/issues/121
     * we will add animated classes after initial hrml will be rendered.
     * So, in this case will not animation on component render.
     */
    animated$ = of(true).pipe(delay(500), startWith(false));

    constructor(
        injector: Injector,
        private uniqueIdService: UniqueIdService,
        private elementRef: ElementRef,
        private sanitizerService: DomSanitizerService
    ) {
        super(injector);
    }

    ngOnInit() {
        this.id = 'is-toggle-' + this.uniqueIdService.getUniqueId();
        this.value = this.value || '';
    }

    onChange(event) {
        this.model = event;
        this.isChecked$.next(this.model);
        this.propagateChange(event);
        this.modelChange.emit(Boolean(event));
        this.setLabel(this.label);
    }

    setLabel(label: ToggleLabel) {
        if (isString(label)) {
            this.currentLabel = label;
        } else if (!!label && label.hasOwnProperty('on')) {
            this.currentLabel = this.model ? label?.on : label?.off;
        }
    }

    // Implement ControlValueAccessor methods
    /**
     * Method to call when value has changes.
     */
    propagateChange = (_: string) => {};

    /**
     * Method to call when the component is touched (when it was is clicked).
     */
    propagateTouched = () => {};

    /**
     * update value from model to the component
     */
    writeValue(value: any): void {
        if (value === undefined || value === null) {
            this.model = false;
        } else {
            this.model = value;
        }
        this.isChecked$.next(this.model);
        this.setLabel(this.label);
    }

    /**
     * Informs the outside world about changes.
     * see method propagateChange call - this.propagateChange(this.model);
     */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * Component was Touched
     */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    /**
     * on set form controll enabled / disabled
     * also do UI Component enabled / disabled
     */
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled$.next(isDisabled);
    }
}
