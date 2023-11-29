import {Component} from '@angular/core';
import {IconHeaderActionBaseComponent} from '@ironsource/fusion-ui/components/icon-header-action/common/base';

@Component({
    selector: 'fusion-icon-header-action',
    templateUrl: '../common/base/icon-header-action.base.component.html',
    styleUrls: ['./icon-header-action.component.scss'],
    host: {'ui-version': '1'}
})
export class IconHeaderActionComponent extends IconHeaderActionBaseComponent {}
