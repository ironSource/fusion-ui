import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {SwitchersDocsV2Component} from './switchers-docs-v2.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {SwitcherModule} from '@ironsource/fusion-uifusion-ui';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('SwitchersDocsV2Component', () => {
    let component: SwitchersDocsV2Component;
    let fixture: ComponentFixture<SwitchersDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [SwitchersDocsV2Component],
                imports: [ReactiveFormsModule, DocsMenuModule, ExampleBlockModule, CodeBlockModule, SwitcherModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SwitchersDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
