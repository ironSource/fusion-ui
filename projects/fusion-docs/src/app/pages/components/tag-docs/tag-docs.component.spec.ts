import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TagDocsComponent} from './tag-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
import {TagModule} from '@ironsource/fusion-ui/components/tag/v1';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input/v1';
import {TooltipModule} from '@ironsource/fusion-ui';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('TagDocsComponent', () => {
    let component: TagDocsComponent;
    let fixture: ComponentFixture<TagDocsComponent>;

    beforeEach(waitForAsync(() => {
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
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
