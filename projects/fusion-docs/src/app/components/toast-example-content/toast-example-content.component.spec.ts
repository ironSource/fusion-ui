import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ToastExampleContentComponent} from './toast-example-content.component';
import {IconModule} from '@ironource/fusion-ui';

describe('ToastExampleContentComponent', () => {
    let component: ToastExampleContentComponent;
    let fixture: ComponentFixture<ToastExampleContentComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ToastExampleContentComponent],
                imports: [IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastExampleContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
