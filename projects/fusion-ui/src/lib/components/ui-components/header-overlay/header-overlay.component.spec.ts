import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderOverlayComponent} from './header-overlay.component';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {ModalModule} from '../modal/modal.module';

describe('HeaderOverlayComponent', () => {
    let component: HeaderOverlayComponent;
    let fixture: ComponentFixture<HeaderOverlayComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [ModalModule, DynamicComponentsModule, ClickOutsideModule],
                declarations: [HeaderOverlayComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderOverlayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
