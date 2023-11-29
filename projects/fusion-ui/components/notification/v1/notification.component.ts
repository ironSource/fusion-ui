import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NOTIFICATION_ICON_MAP} from '@ironsource/fusion-ui/components/notification/common/entities';
import {NotificationBaseComponent} from '@ironsource/fusion-ui/components/notification/common/base';

@Component({
    selector: 'fusion-notification',
    templateUrl: '../common/base/notification.base.component.html',
    styleUrls: ['./notification.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent extends NotificationBaseComponent implements OnInit {
    ngOnInit() {
        this.closeIconName$.next({iconName: 'close', iconVersion: 'v1'});
    }

    getIconName(): string {
        return NOTIFICATION_ICON_MAP[1][this.notificationType];
    }
}
