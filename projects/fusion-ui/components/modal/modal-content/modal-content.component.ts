import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {StyleBase} from '@ironsource/fusion-ui/components/style';

@Component({
    selector: 'fusion-modal-content',
    templateUrl: './modal-content.component.html',
    styleUrls: ['./modal-content.component.scss', './modal-content.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContentComponent extends StyleBase {
    @Input() padding: string;
    @Input() waiting = false;

    constructor(injector: Injector) {
        super(injector);
    }
}
