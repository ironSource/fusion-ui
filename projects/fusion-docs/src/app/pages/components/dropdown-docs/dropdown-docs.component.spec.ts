import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDocsComponent} from './dropdown-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AddboxDropdownModule, ButtonModule, CheckboxModule, DropdownModule, InputModule, MultiDropdownModule} from '@ironource/fusion-ui';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

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
