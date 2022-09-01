import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ListBoxDocsV2Component} from './list-box-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ListBoxModule} from '@ironsource/fusion-ui/components/list-box/v2';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ListBoxDocsV2Component', () => {
    let component: ListBoxDocsV2Component;
    let fixture: ComponentFixture<ListBoxDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ListBoxDocsV2Component],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ReactiveFormsModule, ListBoxModule, MultiDropdownModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ListBoxDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
