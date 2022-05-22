import {ChangeDetectorRef, Directive, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {SwitcherItem} from './entities/switcher-item';
import {SwitcherMode} from './entities/switcher-mode.enum';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Directive()
export class SwitcherBaseComponent implements OnInit {
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

    constructor(private uniqueService: UniqueIdService, private changeDetectorRef: ChangeDetectorRef) {}

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
