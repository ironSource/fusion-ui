import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrendStatus} from '@ironsource/fusion-ui/components/trend-indicator/trend-indicator.entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-trend-indicator',
    standalone: true,
    imports: [CommonModule, IconModule],
    host: {class: 'fusion-v4'},
    templateUrl: './trend-indicator.component.html',
    styleUrls: ['./trend-indicator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendIndicatorComponent {
    // region Inputs - status
    @Input() set status(value: TrendStatus) {
        this._status = value;
    }
    get status(): TrendStatus {
        return this._status;
    }
    private _status: TrendStatus = 'neutral';
    // endregion
    // region Inputs - value
    @Input() set value(value: string) {
        this._value = value;
    }
    get value(): string {
        return this._value;
    }
    private _value: string = '';
    // endregion
    // region Inputs - hasBackground
    @Input() set hasBackground(value: boolean) {
        this._hasBackground = value;
    }
    get hasBackground(): boolean {
        return this._hasBackground;
    }
    private _hasBackground = true;
    // endregion

    get showTrendIcon(): boolean {
        return this.status !== 'neutral' || !this.value;
    }

    get trendIcon(): string {
        switch (this.status) {
            case 'up':
                return 'ph/bold/arrow-up';
            case 'down':
                return 'ph/bold/arrow-down';
            default:
                return 'ph/bold/minus';
        }
    }
}
