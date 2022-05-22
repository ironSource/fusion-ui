import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {SwitcherItem, SwitcherConfiguration} from './switcher.entities';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {UniqueIdService} from '@ironsource/fusion-ui/services';

@Component({
    selector: 'fusion-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwitcherComponent),
            multi: true
        }
    ]
})
export class SwitcherComponent implements OnInit {
    @Input() set configuration(value: SwitcherConfiguration) {
        if (value) {
            this.switcherConfiguration = {...this.switcherConfiguration, ...value};
        }
    }
    @Input() options: SwitcherItem[] = [];
    @Output() selectedChange: EventEmitter<SwitcherItem> = new EventEmitter();

    id: string;
    isDisabled = false;
    switcherConfiguration: SwitcherConfiguration = {name: '', size: 'small'};

    private selected: SwitcherItem;

    constructor(private uniqueService: UniqueIdService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        const uniq = this.uniqueService.getUniqueId();
        this.switcherConfiguration.name = this.switcherConfiguration.name || `fu-switcher-${uniq}`;
        this.id = `fuSwitcher${uniq}`;
    }

    isSelected(item: SwitcherItem): boolean {
        if (isNullOrUndefined(this.selected) || isNullOrUndefined(this.selected.id)) {
            return false;
        }
        return item.id === this.selected.id;
    }

    setSelection(selected: SwitcherItem): void {
        this.propagateTouched();
        if (!isNullOrUndefined(this.selected) && !isNullOrUndefined(this.selected.id) && selected.id === this.selected.id) {
            return;
        }
        this.selected = selected;
        this.propagateChange({...selected});
        this.selectedChange.emit({...selected});
    }

    propagateChange = (_: SwitcherItem) => {};

    propagateTouched = () => {};

    writeValue(value: SwitcherItem): void {
        this.selected = isNullOrUndefined(value) ? {id: '', title: ''} : value;
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
