import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SvgModule, TooltipModule} from '@ironsource/fusion-ui';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout';
import {LayoutModule as LayoutV1Module} from '@ironsource/fusion-ui/components/layout/v1';
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
