import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {ModalService, NotificationService, NotificationType, StyleVersion, VersionService} from '@ironsource/fusion-uifusion-ui';
import {Observable, timer, Subject, merge} from 'rxjs';
import {mapTo, switchMap, takeUntil} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';

@Component({
    selector: 'fusion-modal-docs',
    templateUrl: './modal-docs.component.html',
    styleUrls: ['./modal-docs.component.scss']
})
export class ModalDocsComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    @ViewChild('modalWaiting')
    modalWaiting: ModalDocsComponent;

    loadModalContent$: Observable<boolean>;
    modalButtonClick$ = new Subject();
    modalClosed$ = new Subject();
    mandatoryForm = new FormControl(null, Validators.required);
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Types',
            items: [
                {
                    label: 'Notifications',
                    scrollTo: '#notification',
                    scrollOffset: 80
                },
                {
                    label: 'Dialog',
                    scrollTo: '#dialog',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Loading',
                    scrollTo: '#modalLoading',
                    scrollOffset: 30
                },
                {
                    label: 'Loading Page',
                    scrollTo: '#modalLoadingPage',
                    scrollOffset: 15
                },
                {
                    label: 'Error',
                    scrollTo: '#modalError',
                    scrollOffset: 0
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Notifications',
                    scrollTo: '#paramsNotification',
                    scrollOffset: 30
                },
                {
                    label: 'Modal',
                    scrollTo: '#paramsModal',
                    scrollOffset: 30
                },
                {
                    label: 'Modal - events',
                    scrollTo: '#eventsModal',
                    scrollOffset: 30
                },
                {
                    label: 'Modal - Service',
                    scrollTo: '#serviceModal',
                    scrollOffset: 30
                }
            ]
        }
    ];

    constructor(
        public notificationService: NotificationService,
        public modalService: ModalService,
        private versionService: VersionService,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadModalContent$ = merge(
            this.modalClosed$.asObservable().pipe(mapTo(false)),
            this.modalButtonClick$.asObservable().pipe(switchMap(_ => timer(1000).pipe(mapTo(true))))
        );
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/modal']);
            }
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    saveClicked(modalId: string): void {
        console.log('modal save button clicked!');
        this.modalService.close(modalId);
        this.modalClosed$.next();
    }

    closeModal() {
        this.modalClosed$.next();
    }

    showNotification(type: string): void {
        this.notificationService.showNotification({
            type: NotificationType[type],
            title: `${type} Notification Title`,
            content: 'Are you sure lorem ipsum dolor sit amet, Consectetur adipiscing elit?',
            buttons: {
                secondary: {
                    label: 'Cancel',
                    onClick: () => {
                        console.log('Cancel button clicked');
                        this.notificationService.hideNotification();
                    }
                },
                primary: {
                    label: 'Ok',
                    onClick: () => {
                        console.log('Primary button clicked');
                        this.notificationService.hideNotification();
                    }
                }
            }
        });
    }
}
