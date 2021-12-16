import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AccordionExampleContentComponent} from './accordion-example-content.component';

describe('AccordionExampleOpenedComponent', () => {
    let component: AccordionExampleContentComponent;
    let fixture: ComponentFixture<AccordionExampleContentComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AccordionExampleContentComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AccordionExampleContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
