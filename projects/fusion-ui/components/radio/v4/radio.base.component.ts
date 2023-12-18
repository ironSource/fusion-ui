import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';

@Directive()
export abstract class RadioBaseComponent implements OnInit {
    /** checkbox DOM element id. If not set, will be generated.
     * @internal
     * */
    @Input() id: string;

    @Input() set label(value: string) {
        this._label = value;
    }
    @Input() set name(value: string) {
        this._name = value;
    }
    @Input() set value(value: string | number) {
        this._value = value;
    }
    @Input() set selected(value: boolean) {
        this._selected = value ?? false;
    }
    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
    }

    @Output() changed = new EventEmitter<string | number>();

    /** @internal */
    get label(): string {
        return this._label;
    }
    /** @internal */
    get name(): string {
        return this._name;
    }
    /** @internal */
    get value(): string | number {
        return this._value;
    }
    /** @internal */
    get selected(): boolean {
        return this._selected;
    }
    /** @internal */
    get disabled(): boolean {
        return this._disabled;
    }

    private _label: string;
    private _name: string;
    private _value: string | number;
    private _disabled = false;
    private _selected = false;

    constructor(private uniqueIdService: UniqueIdService) {}

    ngOnInit() {
        this.id = this.id || 'fu-radio-' + this.uniqueIdService.getUniqueId();
    }

    /** @internal */
    selectStateChange($event: Event) {
        this._selected = ($event.target as HTMLInputElement).checked;
        this.changed.emit(this.value);
    }
}
