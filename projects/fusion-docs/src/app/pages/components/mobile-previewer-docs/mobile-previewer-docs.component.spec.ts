import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {MobilePreviewerDocsComponent} from './mobile-previewer-docs.component';
import {MobilePreviewerDocsRoutingModule} from './mobile-previewer-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router} from '@angular/router';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {MobilePreviewerModule} from '@ironsource/fusion-ui/components/mobile-previewer/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';
import {TableModule} from '@ironsource/fusion-ui/components/table/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('MobilePreviewerDocsComponent', () => {
    let component: MobilePreviewerDocsComponent;
    let fixture: ComponentFixture<MobilePreviewerDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MobilePreviewerDocsComponent],
            imports: [
                MobilePreviewerDocsRoutingModule,
                ExampleBlockModule,
                CodeBlockModule,
                DocsMenuModule,
                ButtonModule,
                MobilePreviewerModule,
                PopupModule,
                TableModule
            ],
            providers: [{provide: Router, useClass: RouterStub}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobilePreviewerDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
