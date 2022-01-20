import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToastServiceDocComponent} from './toast-service-doc.component';

describe('ToastServiceDocComponent', () => {
    let component: ToastServiceDocComponent;
    let fixture: ComponentFixture<ToastServiceDocComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToastServiceDocComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastServiceDocComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
