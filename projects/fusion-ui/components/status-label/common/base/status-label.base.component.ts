import {Directive, Input} from '@angular/core';
import {StatusLabelBorderType, StatusLabelConfig, StatusLabelStatus} from '@ironsource/fusion-ui/components/status-label/common/entities';

@Directive()
export abstract class StatusLabelBaseComponent {
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
