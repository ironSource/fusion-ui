import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDocsV2Component} from './dropdown-docs-v2.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';
import {Router, RouterModule} from '@angular/router';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v2';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('DropdownDocsV2Component', () => {
    let component: DropdownDocsV2Component;
    let fixture: ComponentFixture<DropdownDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DropdownDocsV2Component],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    DropdownModule,
                    MultiDropdownModule,
                    ErrorMessageModule
                ],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
