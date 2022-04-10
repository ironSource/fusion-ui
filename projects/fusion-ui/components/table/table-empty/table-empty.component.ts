import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableEmpty]',
    templateUrl: './table-empty.component.html',
    styleUrls: ['./table-empty.component.scss', './table-empty.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableEmptyComponent extends FusionBaseComponent {
    @Input() fusionTableEmpty: number;
    @Input() customContent: DynamicComponentConfiguration;
    @Input() header: string;
    @Input() subHeader: string;
    @Input() icon: string;
    @Input() showNoDataImage = true;

    constructor(injector: Injector) {
        super(injector);
    }
}
