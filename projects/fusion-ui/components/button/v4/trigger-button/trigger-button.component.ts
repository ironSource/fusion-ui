import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';

@Component({
    selector: 'fusion-trigger-button',
    standalone: true,
    imports: [CommonModule, IconModule, LoaderComponent],
    templateUrl: './trigger-button.component.html',
    styleUrls: ['./trigger-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerButtonComponent {
    @Input() set startIconName(value: string) {
        this._startIconName = value.trim();
    }

    /** @internal */
    @Input() set endIconName(value: string) {
        this._endIconName = value.trim();
    }
    @Input() set disabled(value: boolean) {
        this._disabled = value ?? false;
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

    private _startIconName: string;
    private _endIconName = 'ph/caret-down';
    private _disabled = false;
}
