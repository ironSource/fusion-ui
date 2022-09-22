import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {CopyToClipboardDocsComponent} from './copy-to-clipboard-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CopyToClipboardModule} from '@ironsource/fusion-ui';

describe('CopyToClipboardDocsComponent', () => {
    let component: CopyToClipboardDocsComponent;
    let fixture: ComponentFixture<CopyToClipboardDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CopyToClipboardDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, ReactiveFormsModule, CopyToClipboardModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CopyToClipboardDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
