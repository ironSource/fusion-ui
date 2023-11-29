import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AccordionBaseComponent} from '@ironsource/fusion-ui/components/accordion/common/base';

@Component({
    selector: 'fusion-accordion',
    templateUrl: '../common/base/accordion.base.component.html',
    styleUrls: ['./accordion.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent extends AccordionBaseComponent {}
