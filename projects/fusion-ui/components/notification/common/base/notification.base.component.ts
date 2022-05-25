import {AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NotificationService} from '@ironsource/fusion-ui/components/notification/common/services';
import {Notification, NotificationType} from '@ironsource/fusion-ui/components/notification/common/entities';
import {isFunction} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject} from 'rxjs';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

@Directive()
export abstract class NotificationBaseComponent implements AfterViewInit {
    @Input() data: Notification = {
        type: NotificationType.Basic,
        title: '',
        content: '',
        shown: false
    };
    // eslint-disable-next-line
    @Output() onClose = new EventEmitter();

    closeIconName$ = new BehaviorSubject<IconData>({iconName: 'close', iconVersion: 'v2'});

    get notificationType(): string {
        return NotificationType[this.data.type].toLowerCase();
    }

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private notificationService: NotificationService,
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {}

    ngAfterViewInit() {
        this.renderer.appendChild(this.document.body, this.elRef.nativeElement);
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
