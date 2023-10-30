import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalComponent} from './modal.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ModalFooterComponent} from './components/modal-footer/modal-footer.component';
import {ModalContentComponent} from './components/modal-content/modal-content.component';
import {ModalHeaderComponent} from './components/modal-header/modal-header.component';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ButtonModule, IconModule, GenericPipe],
            declarations: [ModalComponent, ModalFooterComponent, ModalContentComponent, ModalHeaderComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        component.configuration = {defaultModalState: 'close', id: 'testModal1', width: '600', headerText: 'Overlay Title'};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
