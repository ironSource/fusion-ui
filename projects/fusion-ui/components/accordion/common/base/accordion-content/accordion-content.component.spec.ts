import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AccordionContentComponent} from './accordion-content.component';

describe('AccordionBoxContentComponent', () => {
    let component: AccordionContentComponent;
    let fixture: ComponentFixture<AccordionContentComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AccordionContentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccordionContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
