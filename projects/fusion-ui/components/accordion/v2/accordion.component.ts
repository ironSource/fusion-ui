import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AccordionBaseComponent} from '@ironsource/fusion-ui/components/accordion/common/base';

@Component({
    selector: 'fusion-accordion',
    templateUrl: '../common/base/accordion.base.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccordionComponent extends AccordionBaseComponent {}
