import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {FieldHelpTextTestIdModifiers, GenericPipe, TestIdsService} from '@ironsource/fusion-ui';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CommonModule} from '@angular/common';
import {InputVariant} from '@ironsource/fusion-ui/components/input/v4';

@Component({
    selector: 'fusion-input-helper',
    standalone: true,
    imports: [CommonModule, GenericPipe, IconModule],
    templateUrl: './input-helper.component.html',
    styleUrl: './input-helper.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputHelperComponent {
    @Input() text: string;
    @Input() state: InputVariant = 'default';
    @Input() iconName: IconData;

    @Input() testId: string;

    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);
    /** @internal */
    protected readonly fieldHelpTextTestIdModifiers = FieldHelpTextTestIdModifiers;
}
