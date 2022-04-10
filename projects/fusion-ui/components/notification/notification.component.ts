import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Injector,
    Input,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Notification} from './notification';
import {NotificationService} from './notification.service';
import {NotificationType} from './notification-type';
import {isFunction} from '@ironsource/fusion-ui/utils';
import {FusionBaseComponent, StyleVersion} from '@ironsource/fusion-ui/components/style';
import {BehaviorSubject} from 'rxjs';
import {NOTIFICATION_ICON_MAP} from './notification.config';

/** @dynamic */
@Component({
    selector: 'fusion-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss', './notification.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent extends FusionBaseComponent implements OnInit, AfterViewInit {
    @Input() data: Notification = {
        type: NotificationType.Basic,
        title: '',
        content: '',
        shown: false
    };
    // eslint-disable-next-line
    @Output() onClose = new EventEmitter();

    closeIconName$ = new BehaviorSubject<string>('close');

    get notificationType(): string {
        return NotificationType[this.data.type].toLowerCase();
    }

    constructor(
        injector: Injector,
        @Inject(DOCUMENT) private document: Document,
        private notificationService: NotificationService,
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {
        super(injector);
    }

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            this.closeIconName$.next(styleVersion === StyleVersion.V2 ? 'close' : 'close');
        });
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.renderer.appendChild(this.document.body, this.elRef.nativeElement);
    }

    getIconName(styleVersion: StyleVersion): string {
        return NOTIFICATION_ICON_MAP[styleVersion][this.notificationType];
    }

    close() {
        this.notificationService.hideNotification();
        this.onClose.emit(this.elRef.nativeElement);
    }

    secondaryButtonClicked(): void {
        if (this.data && this.data.buttons && this.data.buttons.secondary && isFunction(this.data.buttons.secondary.onClick)) {
            this.data.buttons.secondary.onClick();
        } else {
            this.close();
        }
    }

    primaryButtonClicked(): void {
        if (this.data && isFunction(this.data.buttons.primary.onClick)) {
            this.data.buttons.primary.onClick();
        } else {
            this.close();
        }
    }
}
