import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {GettingStartedComponent} from './getting-started.component';
import {RouterTestingModule} from '@angular/router/testing';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {CodeBlockModule} from '../../components/code-block/code-block.module';
import {CopyToClipboardModule} from '@ironsource/fusion-ui';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

describe('GettingStartedComponent', () => {
    let component: GettingStartedComponent;
    let fixture: ComponentFixture<GettingStartedComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [GettingStartedComponent],
    imports: [RouterTestingModule, CodeBlockModule, CopyToClipboardModule, IconModule, TooltipModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GettingStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
