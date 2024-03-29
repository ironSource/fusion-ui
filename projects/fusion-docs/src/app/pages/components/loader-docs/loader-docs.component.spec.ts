import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoaderDocsComponent} from './loader-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomLoaderModule} from './custom-loader/custom-loader.module';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';

describe('LoaderDocsComponent', () => {
    let component: LoaderDocsComponent;
    let fixture: ComponentFixture<LoaderDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderDocsComponent],
            imports: [
                ExampleBlockModule,
                CodeBlockModule,
                DocsMenuModule,
                RouterModule,
                ReactiveFormsModule,
                LoaderModule,
                LoaderInlineModule,
                CustomLoaderModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
