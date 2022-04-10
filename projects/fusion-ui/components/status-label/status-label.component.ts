import {Component, Injector, Input} from '@angular/core';
import {STATUS_LABEL_THEME_TOKEN} from './status-label.theme';
import {ThemeBase} from '@ironsource/fusion-ui/components/style';
import {StatusLabelBorderType, StatusLabelConfig, StatusLabelStatus} from './status-label.entity';

@Component({
    selector: 'fusion-status-label',
    templateUrl: './status-label.component.html',
    styleUrls: ['./status-label.component.scss']
})
export class StatusLabelComponent extends ThemeBase {
    @Input() config: StatusLabelConfig = {};

    get holderClasses(): string[] {
        return [
            !!this.config.icon && 'with-icon',
            this.config.status === StatusLabelStatus.Warning && 'warning',
            this.config.status === StatusLabelStatus.Error && 'error',
            this.config.borderType === StatusLabelBorderType.Circle && 'rounded'
        ].filter(Boolean);
    }

    constructor(injector: Injector) {
        super(injector, STATUS_LABEL_THEME_TOKEN);
    }
}
