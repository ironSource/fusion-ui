import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupContentExampleComponent} from './popup-content-example.component';

describe('PopupContentExampleComponent', () => {
    let component: PopupContentExampleComponent;
    let fixture: ComponentFixture<PopupContentExampleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PopupContentExampleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupContentExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
