import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalContentComponent} from './modal-content.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

describe('ModalContentComponent', () => {
    let component: ModalContentComponent;
    let fixture: ComponentFixture<ModalContentComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [LoaderModule, ButtonModule, IconModule],
                declarations: [ModalContentComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
