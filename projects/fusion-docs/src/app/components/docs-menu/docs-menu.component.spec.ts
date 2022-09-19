import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocsMenuComponent} from './docs-menu.component';
import {ScrollToModule} from '@ironsource/fusion-ui';

describe('DocsMenuComponent', () => {
    let component: DocsMenuComponent;
    let fixture: ComponentFixture<DocsMenuComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DocsMenuComponent],
            imports: [ScrollToModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DocsMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
