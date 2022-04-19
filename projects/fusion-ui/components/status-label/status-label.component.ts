import {Component, Input} from '@angular/core';
import {StatusLabelBorderType, StatusLabelConfig, StatusLabelStatus} from './status-label.entity';

@Component({
    selector: 'fusion-status-label',
    templateUrl: './status-label.component.html',
    styleUrls: ['./status-label.component.scss']
})
export class StatusLabelComponent {
    @Input() config: StatusLabelConfig = {};

    get holderClasses(): string[] {
        return [
            !!this.config.icon && 'with-icon',
            this.config.status === StatusLabelStatus.Warning && 'warning',
            this.config.status === StatusLabelStatus.Error && 'error',
            this.config.borderType === StatusLabelBorderType.Circle && 'rounded'
        ].filter(Boolean);
    }
}
