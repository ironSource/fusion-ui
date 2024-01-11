import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TrendStatus} from './trend-indicator.entities';

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
    @Input() status: TrendStatus = 'neutral';
    @Input() value: string = '';
    @Input() hasBackground: boolean = true;

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
