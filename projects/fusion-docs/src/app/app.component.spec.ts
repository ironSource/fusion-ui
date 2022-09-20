import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout/v2';
import {LayoutModule as LayoutV1Module} from '@ironsource/fusion-ui/components/layout/v1';
import {AppRoutingModule} from './app.routing';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [LayoutV1Module, AppRoutingModule, SvgModule, LayoutModule, TooltipModule]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
