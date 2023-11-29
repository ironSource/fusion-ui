import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {SwitcherItem, SwitcherConfiguration} from './switcher.entities';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';

@Component({
    selector: 'fusion-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss'],
    host: {'ui-version': '3'},
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
    /**
     * Configuration:
     * type SwitcherConfiguration = {
     *     name?: string;
     *     size?: 'large';
     * };
     */
    @Input() set configuration(value: SwitcherConfiguration) {
        if (value) {
            this.switcherConfiguration = {...this.switcherConfiguration, ...value};
        }
    }

    /**
     * Switcher options: interface SwitcherItem {
     *     id: number | string;
     *     title: string;
     * }
     */
    @Input() options: SwitcherItem[] = [];

    /**
     * On selection changed. But better use formControl
     * @internal
     */
    @Output() selectedChange: EventEmitter<SwitcherItem> = new EventEmitter();

    /** @internal */
    id: string;
    /** @internal */
    switcherConfiguration: SwitcherConfiguration = {name: '', size: 'small'};
    /** @internal */
    selected: SwitcherItem;

    constructor(private uniqueService: UniqueIdService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        const uniq = this.uniqueService.getUniqueId();
        this.switcherConfiguration.name = this.switcherConfiguration.name || `fu-switcher-${uniq}`;
        this.id = `fuSwitcher${uniq}`;
    }

    /** @internal */
    isSelected(item: SwitcherItem): boolean {
        if (isNullOrUndefined(this.selected) || isNullOrUndefined(this.selected.id)) {
            return false;
        }
        return item.id === this.selected.id;
    }
    /** @internal */
    setSelection(selected: SwitcherItem): void {
        this.propagateTouched();
        if (!isNullOrUndefined(this.selected) && !isNullOrUndefined(this.selected.id) && selected.id === this.selected.id) {
            return;
        }
        this.selected = selected;
        this.propagateChange({...selected});
        this.selectedChange.emit({...selected});
    }

    /** @internal */
    propagateChange = (_: SwitcherItem) => {};
    /** @internal */
    propagateTouched = () => {};

    /** @internal */
    writeValue(value: SwitcherItem): void {
        this.selected = isNullOrUndefined(value) ? {id: '', title: ''} : value;
        this.changeDetectorRef.markForCheck();
    }

    /** @ignore */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @ignore */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}
