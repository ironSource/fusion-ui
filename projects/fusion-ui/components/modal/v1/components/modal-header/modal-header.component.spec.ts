import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalHeaderComponent} from './modal-header.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

describe('ModalHeaderComponent', () => {
    let component: ModalHeaderComponent;
    let fixture: ComponentFixture<ModalHeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [LoaderModule, ButtonModule, IconModule],
                declarations: [ModalHeaderComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
