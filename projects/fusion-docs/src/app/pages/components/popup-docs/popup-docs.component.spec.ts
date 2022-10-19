import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupDocsComponent} from './popup-docs.component';
import {PopupDocsRoutingModule} from './popup-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router} from '@angular/router';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('PopupDocsComponent', () => {
    let component: PopupDocsComponent;
    let fixture: ComponentFixture<PopupDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PopupDocsComponent],
            imports: [PopupDocsRoutingModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, PopupModule],
            providers: [{provide: Router, useClass: RouterStub}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
