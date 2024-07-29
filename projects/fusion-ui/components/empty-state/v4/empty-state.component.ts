import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {EmptyStateType} from './empty-state.entities';

@Component({
    selector: 'fusion-empty-state',
    standalone: true,
    imports: [SvgModule, IconModule],
    templateUrl: './empty-state.component.html',
    styleUrl: './empty-state.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyStateComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() type: EmptyStateType = 'empty';
}
