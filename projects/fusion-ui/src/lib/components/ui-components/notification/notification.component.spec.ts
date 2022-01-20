import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationComponent} from './notification.component';
import {ModalModule} from '../modal/modal.module';
import {IconModule} from '../icon/icon.module';
import {NotificationType} from './notification-type';

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
