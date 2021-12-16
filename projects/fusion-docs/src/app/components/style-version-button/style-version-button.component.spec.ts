import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {StyleVersionButtonComponent} from './style-version-button.component';

describe('StyleVersionButtonComponent', () => {
    let component: StyleVersionButtonComponent;
    let fixture: ComponentFixture<StyleVersionButtonComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [StyleVersionButtonComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(StyleVersionButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
