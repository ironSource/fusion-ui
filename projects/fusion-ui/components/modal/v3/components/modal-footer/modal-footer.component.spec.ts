import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalFooterComponent} from './modal-footer.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";

describe('ModalFooterComponent', () => {
    let component: ModalFooterComponent;
    let fixture: ComponentFixture<ModalFooterComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ButtonModule, IconModule, GenericPipe],
            declarations: [ModalFooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
