import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupDocsComponent} from './popup-docs.component';
import {PopupDocsRoutingModule} from './popup-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule, PopupModule} from '@ironsrc/fusion-ui';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('PopupDocsComponent', () => {
    let component: PopupDocsComponent;
    let fixture: ComponentFixture<PopupDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PopupDocsComponent],
                imports: [PopupDocsRoutingModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, PopupModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
