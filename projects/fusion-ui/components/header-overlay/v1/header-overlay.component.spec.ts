import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderOverlayComponent} from './header-overlay.component';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v1';

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
