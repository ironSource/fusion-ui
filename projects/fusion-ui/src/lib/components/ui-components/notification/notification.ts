import {NotificationType} from './notification-type';
import {NotificationActionButton} from './notification-action-button';

export interface Notification {
    type: NotificationType;
    title: string;
    content: string;
    buttons?: {
        secondary?: NotificationActionButton;
        primary: NotificationActionButton;
    };
    shown?: boolean;
}
