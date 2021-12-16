import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListBoxDocsComponent} from './list-box-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ListBoxModule, MultiDropdownModule} from '@ironsrc/fusion-ui';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ListBoxDocsComponent', () => {
    let component: ListBoxDocsComponent;
    let fixture: ComponentFixture<ListBoxDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ListBoxDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    ListBoxModule,
                    MultiDropdownModule
                ],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ListBoxDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
