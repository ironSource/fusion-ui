import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableDocsV2Component} from './table-docs-v2.component';
import {TableModule} from '@ironsource/fusion-uifusion-ui';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('TableDocsV2Component', () => {
    let component: TableDocsV2Component;
    let fixture: ComponentFixture<TableDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TableDocsV2Component],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, TableModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
