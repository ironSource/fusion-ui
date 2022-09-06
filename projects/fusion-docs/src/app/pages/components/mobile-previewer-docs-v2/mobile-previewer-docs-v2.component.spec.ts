import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MobilePreviewerDocsV2Component} from './mobile-previewer-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router} from '@angular/router';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {MobilePreviewerModule} from '@ironsource/fusion-ui/components/mobile-previewer/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('MobilePreviewerDocsV2Component', () => {
    let component: MobilePreviewerDocsV2Component;
    let fixture: ComponentFixture<MobilePreviewerDocsV2Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MobilePreviewerDocsV2Component],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, MobilePreviewerModule, PopupModule],
            providers: [{provide: Router, useClass: RouterStub}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobilePreviewerDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
