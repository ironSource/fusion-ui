import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PubSubEvent, StatusTableCell} from '../';
// import {PubSubService} from '@network-operations/ui/services';

@Component({
    selector: 'fusion-status-table-cell',
    templateUrl: './status-table-cell.component.html',
    styleUrls: ['./status-table-cell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class StatusTableCellComponent {
    @Input() config: StatusTableCell | undefined;

    // constructor(private readonly pubSubService: PubSubService) {}

    pause() {
        console.log('pubSubService.notify');
        // this.pubSubService.notify({eventType: PubSubEvent.Status_Pause, value: this.config});
    }
}
