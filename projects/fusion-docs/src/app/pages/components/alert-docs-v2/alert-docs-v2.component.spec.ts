import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertDocsV2Component} from './alert-docs-v2.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {AlertModule} from '@ironsource/fusion-uifusion-ui';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('AlertDocsV2Component', () => {
    let component: AlertDocsV2Component;
    let fixture: ComponentFixture<AlertDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AlertDocsV2Component],
                imports: [DocsMenuModule, ExampleBlockModule, CodeBlockModule, AlertModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
