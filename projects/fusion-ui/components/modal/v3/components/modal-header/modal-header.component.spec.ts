import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalHeaderComponent} from './modal-header.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";

describe('ModalHeaderComponent', () => {
    let component: ModalHeaderComponent;
    let fixture: ComponentFixture<ModalHeaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ButtonModule, IconModule, GenericPipe],
            declarations: [ModalHeaderComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
