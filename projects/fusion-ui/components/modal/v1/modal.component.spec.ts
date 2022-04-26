import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalComponent} from './modal.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ModalFooterComponent} from './components/modal-footer/modal-footer.component';
import {ModalContentComponent} from './components/modal-content/modal-content.component';
import {ModalHeaderComponent} from './components/modal-header/modal-header.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [LoaderModule, ButtonModule, IconModule],
                declarations: [ModalComponent, ModalFooterComponent, ModalContentComponent, ModalHeaderComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
