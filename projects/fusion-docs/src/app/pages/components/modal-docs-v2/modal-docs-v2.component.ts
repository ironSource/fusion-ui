import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {merge, Observable, Subject, timer} from 'rxjs';
import {NotificationService, NotificationType, StyleVersion} from '@ironsource/fusion-ui';
import {mapTo, switchMap, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';
import {ModalService} from '@ironsource/fusion-ui/components/modal';

@Component({
    selector: 'fusion-modal-docs-v2',
    templateUrl: './modal-docs-v2.component.html',
    styleUrls: ['./modal-docs-v2.component.scss']
})
export class ModalDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Types',
            items: [
                {
                    label: 'Notifications',
                    scrollTo: '#notification'
                },
                {
                    label: 'Dialog',
                    scrollTo: '#dialog'
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Loading Page',
                    scrollTo: '#modalLoadingPage',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Notifications',
                    scrollTo: '#paramsNotification'
                },
                {
                    label: 'Notifications - service',
                    scrollTo: '#serviceNotification'
                },
                {
                    label: 'Modal',
                    scrollTo: '#paramsModal'
                },
                {
                    label: 'Modal - events',
                    scrollTo: '#eventsModal'
                },
                {
                    label: 'Modal - service',
                    scrollTo: '#serviceModal'
                }
            ]
        }
    ];

    modalClosed$ = new Subject();
    modalButtonClick$ = new Subject();
    loadModalContent$: Observable<boolean>;

    constructor(
        public notificationService: NotificationService,
        public modalService: ModalService,
        private versionService: VersionService,
        private router: Router,
        private docLayoutService: DocsLayoutService
    ) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Modal overlay'
        });

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/modal']);
            }
        });
        this.loadModalContent$ = merge(
            this.modalClosed$.asObservable().pipe(mapTo(false)),
            this.modalButtonClick$.asObservable().pipe(switchMap(_ => timer(1000).pipe(mapTo(true))))
        );
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    showNotification(type: string): void {
        this.notificationService.showNotification({
            type: NotificationType[type],
            title: `${type} Notification Title`,
            content: 'Are you sure lorem ipsum dolor sit amet. <br/>Consectetur adipiscing elit?',
            buttons: {
                secondary: {
                    label: 'Cancel',
                    onClick: () => {
                        console.log('Cancel button clicked');
                        this.notificationService.hideNotification();
                    }
                },
                primary: {
                    label: type === 'Delete' ? 'Delete' : 'Ok',
                    class: type === 'Delete' ? 'negative' : '',
                    onClick: () => {
                        console.log('Primary button clicked');
                        if (type === 'Delete') {
                            this.notificationService.setPrimaryButtonLoadingState(true);
                            setTimeout(() => {
                                this.notificationService.setPrimaryButtonLoadingState(false);
                                this.notificationService.hideNotification();
                            }, 2000);
                        } else {
                            this.notificationService.hideNotification();
                        }
                    }
                }
            }
        });
    }

    onNotificationClose($event) {
        console.log('NotificationClosed: ', $event);
    }

    saveClicked(modalId: string): void {
        console.log('modal save button clicked!');
        this.modalService.close(modalId);
        this.modalClosed$.next();
    }

    closeModal() {
        this.modalClosed$.next();
    }
}
