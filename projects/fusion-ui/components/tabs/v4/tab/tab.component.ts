import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabBaseComponent} from '@ironsource/fusion-ui/components/tabs/common/tab.base.component';

@Component({
    selector: 'fusion-tab',
    standalone: true,
    imports: [CommonModule],
    host: {class: 'fusion-v4'},
    template: '<div class="fu-tab-content"><ng-content></ng-content></div>',
    styleUrls: ['./tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent extends TabBaseComponent {}
