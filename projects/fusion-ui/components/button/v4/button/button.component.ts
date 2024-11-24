import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';
import {ButtonBaseComponent} from '../common/button.base.component';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

@Component({
    selector: 'fusion-button',
    imports: [CommonModule, IconModule, LoaderComponent, GenericPipe],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    host: {class: 'fusion-v4'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ButtonBaseComponent {
    @Input() set startIconName(value: string) {
        this._startIconName = value?.trim();
    }

    @Input() set startIconColor(value: string) {
        this._startIconColor = value;
    }

    @Input() set endIconName(value: string) {
        this._endIconName = value?.trim();
    }

    @Input() set endIconColor(value: string) {
        this._endIconColor = value;
    }

    @Input() set selected(value: boolean) {
        this._selected = value ?? false;
    }

    get selected(): boolean {
        return this._selected;
    }

    get startIconName(): string {
        return this._startIconName;
    }

    get startIconColor(): string {
        return this._startIconColor;
    }

    get endIconName(): string {
        return this._endIconName;
    }

    get endIconColor(): string {
        return this._endIconColor;
    }

    /** @internal */
    iconName: string;

    private _startIconName: string;
    private _endIconName: string;
    private _startIconColor: string;
    private _endIconColor: string;
    private _selected: boolean;
}
