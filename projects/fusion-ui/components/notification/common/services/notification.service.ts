import {Injectable} from '@angular/core';
import {NotificationType, Notification} from '@ironsource/fusion-ui/components/notification/common/entities';
import {BehaviorSubject} from 'rxjs';

const NO_NOTIFICATION = {
    type: NotificationType.Basic,
    title: '',
    content: '',
    shown: false
};

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    notification$ = new BehaviorSubject<Notification>(NO_NOTIFICATION);

    showNotification(notificationOptions: Notification): void {
        this.notification$.next({...notificationOptions, shown: true});
    }

    setPrimaryButtonLoadingState(state: boolean): void {
        const currentButtons = this.notification$.getValue().buttons;
        currentButtons.primary.loading = state;
        this.notification$.next({...this.notification$.getValue(), buttons: currentButtons});
    }

    hideNotification() {
        this.notification$.next(NO_NOTIFICATION);
    }
}
