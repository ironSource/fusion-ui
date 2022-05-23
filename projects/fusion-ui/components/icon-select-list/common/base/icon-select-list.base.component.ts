import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconSelectItem} from './entities/icon-select-item';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';

@Directive()
export abstract class IconSelectListBaseComponent implements OnInit {
    @Input() id: string;
    @Input() error: string;
    @Input() options: Array<IconSelectItem>;
    @Input() selected: Array<IconSelectItem>;
    @Input() isMultiSelect = true;
    @Output() selectionChanged = new EventEmitter();

    private uid: string;

    constructor(private _uniqueService: UniqueIdService) {
        this.uid = this._uniqueService.getUniqueId().toString();
    }

    ngOnInit() {
        this.id = this.id || 'iconSelect_' + this.uid;
        this.options = this.options || [];
        this.selected = this.selected || [];
    }

    isItemChecked(item: IconSelectItem): boolean {
        return (
            this.selected &&
            this.selected.some(selected => {
                return selected.id === item.id;
            })
        );
    }

    onItemSelectionChanged(evt: any, item: IconSelectItem): void {
        this.propagateTouched();
        if (!this.isMultiSelect) {
            this.selected = [item];
        } else {
            const idx = this.selected.findIndex(option => option.id === item.id);
            if (evt && idx === -1) {
                this.selected.push(item);
            } else {
                this.selected.splice(idx, 1);
            }
        }
        this.propagateChange(this.selected);
        this.selectionChanged.emit(this.selected);
    }

    propagateChange = (_: any) => {};

    propagateTouched = () => {};

    writeValue(value: IconSelectItem[]): void {
        if (value === undefined || value === null) {
            this.selected = [];
        } else {
            this.selected = [...value];
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}
