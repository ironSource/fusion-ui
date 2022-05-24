import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {RadioComponent} from './radio.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

describe('RadioComponent', () => {
    let component: RadioComponent;
    let fixture: ComponentFixture<RadioComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [RadioComponent],
                imports: [IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
