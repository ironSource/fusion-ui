import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDocsComponent} from './dropdown-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AddboxDropdownModule} from '@ironsource/fusion-ui/components/addbox-dropdown/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('DropdownDocsComponent', () => {
    let component: DropdownDocsComponent;
    let fixture: ComponentFixture<DropdownDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DropdownDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    ButtonModule,
                    RouterModule,
                    ReactiveFormsModule,
                    CheckboxModule,
                    InputModule,
                    DropdownModule,
                    MultiDropdownModule,
                    AddboxDropdownModule
                ],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
