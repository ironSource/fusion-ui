import {Component, ChangeDetectionStrategy} from '@angular/core';
import {DynamicComponentsBaseComponent} from '@ironsource/fusion-ui/components/dynamic-components/common/base';

@Component({
    selector: 'fusion-dynamic-components',
    templateUrl: './dynamic-components.component.html',
    styleUrls: ['./dynamic-components.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponentsComponent extends DynamicComponentsBaseComponent {}
