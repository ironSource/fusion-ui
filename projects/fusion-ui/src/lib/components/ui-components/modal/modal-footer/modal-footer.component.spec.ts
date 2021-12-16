import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalFooterComponent} from './modal-footer.component';
import {LoaderModule} from '../../loader/loader.module';
import {ButtonModule} from '../../button/button.module';
import {IconModule} from '../../icon/icon.module';

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
