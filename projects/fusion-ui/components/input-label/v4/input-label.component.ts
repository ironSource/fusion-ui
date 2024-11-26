import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule, IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {FieldHelpTextTestIdModifiers, FieldLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {tooltipConfiguration, TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

@Component({
    selector: 'fusion-input-label',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [CommonModule, GenericPipe, IconModule, TooltipDirective],
    templateUrl: './input-label.component.html',
    styleUrl: './input-label.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputLabelComponent {
    @Input() text: string;
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() icon: IconData;
    @Input() tooltipText: string;
    @Input() tooltipConfiguration: tooltipConfiguration;

    @Input() testId: string;

    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);
    /** @internal */
    protected readonly fieldLabelTestIdModifiers = FieldLabelTestIdModifiers;
}
