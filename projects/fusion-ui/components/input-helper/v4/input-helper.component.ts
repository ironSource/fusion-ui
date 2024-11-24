import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CommonModule} from '@angular/common';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {FieldHelpTextTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-input-helper',
    imports: [CommonModule, GenericPipe, IconModule],
    templateUrl: './input-helper.component.html',
    styleUrl: './input-helper.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputHelperComponent {
    @Input() text: string;
    @Input() state: 'default' | 'error' | 'success' | 'warning' = 'default';
    @Input() iconName: IconData;

    @Input() testId: string;

    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);
    /** @internal */
    protected readonly fieldHelpTextTestIdModifiers = FieldHelpTextTestIdModifiers;
}
