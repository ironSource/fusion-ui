import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabBaseComponent} from '@ironsource/fusion-ui/components/tabs/common/tab.base.component';

@Component({
    selector: 'fusion-tab',
    standalone: true,
    imports: [CommonModule],
    template: '<div class="fu-tab-content" [class.fu-on-page]="pageMode"><ng-content></ng-content></div>',
    styleUrls: ['./tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent extends TabBaseComponent {
    @Input() set pageMode(value: boolean) {
        this._pageMode = value ?? false;
    }
    get pageMode() {
        return this._pageMode;
    }
    private _pageMode = false;
}
