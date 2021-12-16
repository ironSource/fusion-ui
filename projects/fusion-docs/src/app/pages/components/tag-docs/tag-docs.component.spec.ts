import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TagDocsComponent} from './tag-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule, MultiDropdownModule, TagModule, TagsInputModule, TooltipModule} from '@ironsrc/fusion-ui';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('TagDocsComponent', () => {
    let component: TagDocsComponent;
    let fixture: ComponentFixture<TagDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TagDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    TagModule,
                    TagsInputModule,
                    IconModule,
                    MultiDropdownModule,
                    TooltipModule
                ],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TagDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
