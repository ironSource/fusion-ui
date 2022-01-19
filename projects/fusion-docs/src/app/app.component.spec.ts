import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {LayoutV1Module, LayoutModule, SvgModule, TooltipModule} from '@ironsource/fusion-uifusion-ui';
import {AppRoutingModule} from './app.routing';

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent],
                imports: [LayoutV1Module, AppRoutingModule, SvgModule, LayoutModule, TooltipModule]
            }).compileComponents();
        })
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
