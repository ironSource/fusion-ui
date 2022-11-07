import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListBoxDocsComponent} from './list-box-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ListBoxModule} from '@ironsource/fusion-ui/components/list-box/v2';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';
import {FilterByFieldPipe} from "@ironsource/fusion-ui/pipes/collection";
import {ClonePipe} from "@ironsource/fusion-ui/pipes/clone";

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ListBoxDocsComponent', () => {
    let component: ListBoxDocsComponent;
    let fixture: ComponentFixture<ListBoxDocsComponent>;

    beforeEach(waitForAsync(() => {
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
            providers: [{provide: Router, useClass: RouterStub}, FilterByFieldPipe, ClonePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListBoxDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
