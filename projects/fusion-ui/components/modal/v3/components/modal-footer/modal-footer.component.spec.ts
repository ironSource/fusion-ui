import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalFooterComponent} from './modal-footer.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

describe('ModalFooterComponent', () => {
    let component: ModalFooterComponent;
    let fixture: ComponentFixture<ModalFooterComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [LoaderModule, ButtonModule, IconModule],
                declarations: [ModalFooterComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
