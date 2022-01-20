import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PopupV2InnerComponentExampleComponent} from './popup-v2-inner-component-example.component';
import {IconModule} from '@ironsource/fusion-ui';

describe('PopupV2InnerComponentExampleComponent', () => {
    let component: PopupV2InnerComponentExampleComponent;
    let fixture: ComponentFixture<PopupV2InnerComponentExampleComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PopupV2InnerComponentExampleComponent],
                imports: [IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupV2InnerComponentExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
