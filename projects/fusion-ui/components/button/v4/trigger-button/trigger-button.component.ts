import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';
import {TriggerButtonSize} from './trigger-button.entities';

@Component({
    selector: 'fusion-trigger-button',
    standalone: true,
    imports: [CommonModule, IconModule, LoaderComponent],
    templateUrl: './trigger-button.component.html',
    styleUrls: ['./trigger-button.component.scss'],
    host: {class: 'fusion-v4'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerButtonComponent {
    @Input() set startIconName(value: string) {
        this._startIconName = value;
    }

    /** @internal */
    @Input() set endIconName(value: string) {
        this._endIconName = value;
    }
    @Input() set hasCaretIcon(value: boolean) {
        this._hasCaretIcon = value ?? false;
    }

    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
    }

    @Input() set selected(value: boolean) {
        this._selected = value ?? false;
    }
    @Input() set light(value: boolean) {
        this._light = value ?? false;
    }
    @Input() set size(value: TriggerButtonSize) {
        this._size = value ?? 'md';
    }

    get startIconName(): string {
        return this._startIconName;
    }

    get endIconName(): string {
        return this._endIconName;
    }

    get disabled(): boolean {
        return this._disabled;
    }
    get selected(): boolean {
        return this._selected;
    }
    get light(): boolean {
        return this._light;
    }
    get sizeClass(): String {
        return 'fu-size-' + this._size;
    }
    get hasCaretIcon(): boolean {
        return this._hasCaretIcon;
    }

    private _startIconName: string;
    private _endIconName = 'ph/caret-down';
    private _size: TriggerButtonSize = 'md';
    private _disabled = false;
    private _selected = false;
    private _light = false;
    private _hasCaretIcon = true;
}
