import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableEmpty]',
    templateUrl: './table-empty.component.html',
    styleUrls: ['./table-empty.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableEmptyComponent {
    @Input() fusionTableEmpty: number;
    @Input() customContent: DynamicComponentConfiguration;
    @Input() header: string;
    @Input() subHeader: string;
    @Input() icon: string;
    @Input() showNoDataImage = true;
}
