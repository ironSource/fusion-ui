import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyStateComponent} from '@ironsource/fusion-ui/components/empty-state';
import {EmptyStateType} from '@ironsource/fusion-ui/components/empty-state/v4/empty-state.entities';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {isNullOrUndefined} from '@ironsource/fusion-ui';

@Component({
    selector: '[fusionTableEmpty]',
    standalone: true,
    imports: [CommonModule, EmptyStateComponent, DynamicComponentsModule],
    templateUrl: './table-empty.component.html',
    styleUrls: ['./table-empty.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableEmptyComponent {
    @Input() fusionTableEmpty: number;
    @Input() customContent: DynamicComponentConfiguration;
    @Input() header: string;
    @Input() subHeader: string;
    @Input() set type(value: EmptyStateType) {
        if (!isNullOrUndefined(value)) {
            console.log('value', value);
            this._type = value;
        }
    }
    get type(): EmptyStateType {
        return this._type;
    }

    private _type: EmptyStateType = 'noData';
}
