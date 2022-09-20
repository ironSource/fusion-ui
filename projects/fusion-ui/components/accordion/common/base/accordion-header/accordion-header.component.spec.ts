import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {AccordionHeaderComponent} from './accordion-header.component';

describe('AccordionBoxTitleComponent', () => {
    let component: AccordionHeaderComponent;
    let fixture: ComponentFixture<AccordionHeaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AccordionHeaderComponent],
            imports: [IconModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccordionHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
