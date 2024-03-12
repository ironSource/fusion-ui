import {ChangeDetectionStrategy, Component, HostBinding, Injector, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {TooltipV4Directive} from './tooltip-v4.directive';
import {TooltipContentV4Directive} from './tooltip-content-v4.directive';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-tooltip',
    standalone: true,
    imports: [CommonModule, TooltipV4Directive, TooltipContentV4Directive, GenericPipe],
    template: `
        <div class="tooltip-container" [attr.data-testid]="testId" [fusionTooltip]="tooltipText" [configuration]="tooltipConfig">
            <div #tooltipTriggerElement>
                <ng-content select=".fusionTooltipTrigger"></ng-content>
            </div>
            <div *fusionTooltipContent>
                <ng-content select=".fusionTooltipContent"></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            .tooltip-container {
                display: inline-block;
                position: relative;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipV4Component {
    constructor(private injector: Injector) {}

    /** @internal */
    @Input() set fusionTooltipText(value: string) {
        this.tooltipText = value;
    }

    /** @internal */
    @Input() set tooltipConfiguration(value: tooltipConfiguration) {
        this.tooltipConfig = {...value};
    }

    @Input() testId: string;

    /** @internal */
    tooltipConfig: tooltipConfiguration;
    /** @internal */
    tooltipText: string = '';

    /** @internal */
    testIdTooltipModifiers: typeof TooltipTestIdModifiers = TooltipTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testIdsService.getTestAttribute(this.testId, this.testIdTooltipModifiers.TRIGGER);
    }
}
