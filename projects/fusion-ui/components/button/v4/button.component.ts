import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonBaseComponent} from '@ironsource/fusion-ui/components/button/v4/button.base.component';

@Component({
    selector: 'fusion-button',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    host: {class: 'fusion-v4'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ButtonBaseComponent {
    @Input() set startIconName(value: string) {
        this._startIconName = value.trim();
    }

    @Input() set endIconName(value: string) {
        this._endIconName = value.trim();
    }

    get startIconName(): string {
        return this._startIconName;
    }

    get endIconName(): string {
        return this._endIconName;
    }

    iconName: string;

    private _startIconName: string;
    private _endIconName: string;
}
