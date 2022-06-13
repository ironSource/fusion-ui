import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {PopupComponent} from './popup.component';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';

const POPUP_CONTENT_MOCK = {
    size: {
        width: 300,
        height: 100
    },
    backgroundColor: 'yellow'
};

describe('PopupComponent', () => {
    let component: PopupComponent;
    let fixture: ComponentFixture<PopupComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PopupComponent],
                imports: [ClickOutsideModule, DynamicComponentsModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupComponent);
        component = fixture.componentInstance;
        component.popupData = POPUP_CONTENT_MOCK;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
