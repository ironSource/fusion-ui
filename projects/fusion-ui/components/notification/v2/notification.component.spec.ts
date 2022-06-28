import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationComponent} from './notification.component';
import {ModalModule} from '@ironsource/fusion-ui/components/modal';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {NotificationType} from '@ironsource/fusion-ui/components/notification/common/entities';

describe('NotificationComponent', () => {
    let component: NotificationComponent;
    let fixture: ComponentFixture<NotificationComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [ModalModule, IconModule],
                declarations: [NotificationComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationComponent);
        component = fixture.componentInstance;
        component.data = {
            type: NotificationType.Info,
            title: 'test',
            content: 'test'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
