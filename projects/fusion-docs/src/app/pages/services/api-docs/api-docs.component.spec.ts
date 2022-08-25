import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiDocsComponent} from './api-docs.component';
import {RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

describe('ApiDocsComponent', () => {
    let component: ApiDocsComponent;
    let fixture: ComponentFixture<ApiDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ApiDocsComponent],
            imports: [RouterModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ApiDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
