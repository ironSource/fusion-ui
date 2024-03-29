import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TagDocsV2Component} from './tag-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ClonePipe, FilterByFieldPipe} from '@ironsource/fusion-ui';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TagModule} from '@ironsource/fusion-ui/components/tag/v2';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('TagDocsV2Component', () => {
    let component: TagDocsV2Component;
    let fixture: ComponentFixture<TagDocsV2Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TagDocsV2Component],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ReactiveFormsModule, TagModule, TagsInputModule, IconModule],
            providers: [{provide: Router, useClass: RouterStub}, FilterByFieldPipe, ClonePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
