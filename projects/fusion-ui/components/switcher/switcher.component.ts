import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SwitcherItem} from './entities/switcher-item';
import {SwitcherMode} from './entities/switcher-mode.enum';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';

@Component({
    selector: 'fusion-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss', './switcher.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwitcherComponent),
            multi: true
        }
    ]
})
export class SwitcherComponent extends FusionBaseComponent implements OnInit {
    @Input() name: string;
    @Input() options: SwitcherItem[] = [];
    @Input() error = '';
    @Input() mode = SwitcherMode.Circle;
    @Input() set disabled(value: boolean) {
        this.setDisabledState(value);
    }
    @Output() selectedChange: EventEmitter<SwitcherItem> = new EventEmitter();

    id: string;
    isDisabled = false;

    private selected: SwitcherItem;

    constructor(injector: Injector, private uniqueService: UniqueIdService, private changeDetectorRef: ChangeDetectorRef) {
        super(injector);
    }

    ngOnInit() {
        const uniq = this.uniqueService.getUniqueId();
        this.name = this.name || `fui-switcher-${uniq}`;
        this.id = `fuiSwitcher${uniq}`;
    }

    isSelected(item: SwitcherItem) {
        if (isNullOrUndefined(this.selected) || isNullOrUndefined(this.selected.id)) {
            return false;
        }
        return item.id === this.selected.id;
    }

    setSelected(selected: SwitcherItem) {
        this.propagateTouched();
        if (!isNullOrUndefined(this.selected) && !isNullOrUndefined(this.selected.id) && selected.id === this.selected.id) {
            return;
        }
        this.selected = selected;
        this.propagateChange({...selected});
        this.selectedChange.emit({...selected});
    }

    // Implement ControlValueAccessor methods
    propagateChange = (_: SwitcherItem) => {};

    propagateTouched = () => {};

    writeValue(value: SwitcherItem): void {
        if (isNullOrUndefined(value)) {
            this.selected = {id: '', title: ''};
        } else {
            this.selected = value;
        }
        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
