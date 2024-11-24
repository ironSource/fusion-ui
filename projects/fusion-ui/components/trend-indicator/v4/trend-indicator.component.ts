import {ChangeDetectionStrategy, Component, HostBinding, Injector, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TrendStatus} from './trend-indicator.entities';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {TrendIndicatorTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-trend-indicator',
    imports: [CommonModule, IconModule, GenericPipe],
    host: {class: 'fusion-v4'},
    templateUrl: './trend-indicator.component.html',
    styleUrls: ['./trend-indicator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendIndicatorComponent {
    @Input() status: TrendStatus = 'neutral';
    @Input() value: string = '';
    @Input() hasBackground: boolean = true;
    @Input() testId: string;

    constructor(private injector: Injector) {}

    /** @internal */
    testIdButtonModifiers: typeof TrendIndicatorTestIdModifiers = TrendIndicatorTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testId;
    }

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
