import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationServiceDocComponent} from './notification-service-doc.component';
import {RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

describe('NotificationServiceDocComponent', () => {
    let component: NotificationServiceDocComponent;
    let fixture: ComponentFixture<NotificationServiceDocComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationServiceDocComponent],
            imports: [RouterModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationServiceDocComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
