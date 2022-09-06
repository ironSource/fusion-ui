import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PopupDocsV2Component} from './popup-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {PopupV2InnerComponentExampleModule} from './popup-v2-inner-component-example/popup-v2-inner-component-example.module';
import {Router} from '@angular/router';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('PopupDocsV2Component', () => {
    let component: PopupDocsV2Component;
    let fixture: ComponentFixture<PopupDocsV2Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PopupDocsV2Component],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, PopupModule, PopupV2InnerComponentExampleModule],
            providers: [{provide: Router, useClass: RouterStub}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
