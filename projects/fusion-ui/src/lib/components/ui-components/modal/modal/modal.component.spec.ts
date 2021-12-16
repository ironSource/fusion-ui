import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalComponent} from './modal.component';
import {LoaderModule} from '../../loader/loader.module';
import {ButtonModule} from '../../button/button.module';
import {IconModule} from '../../icon/icon.module';
import {ModalFooterComponent} from '../modal-footer/modal-footer.component';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {ModalHeaderComponent} from '../modal-header/modal-header.component';

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
