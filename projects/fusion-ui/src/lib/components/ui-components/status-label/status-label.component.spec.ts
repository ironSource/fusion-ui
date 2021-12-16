import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatusLabelComponent} from './status-label.component';
import {IconModule} from '../icon/icon.module';

describe('StatusLabelComponent', () => {
    let component: StatusLabelComponent;
    let fixture: ComponentFixture<StatusLabelComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [StatusLabelComponent],
                imports: [IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(StatusLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
