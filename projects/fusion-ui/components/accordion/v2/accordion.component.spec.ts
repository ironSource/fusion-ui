import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccordionComponent} from './accordion.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';

describe('AccordionComponent', () => {
    let component: AccordionComponent;
    let fixture: ComponentFixture<AccordionComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AccordionComponent],
                imports: [DynamicComponentsModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
