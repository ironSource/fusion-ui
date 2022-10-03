import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalContentComponent} from './modal-content.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

describe('ModalContentComponent', () => {
    let component: ModalContentComponent;
    let fixture: ComponentFixture<ModalContentComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ButtonModule, IconModule],
            declarations: [ModalContentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
