import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {CacheDocsComponent} from './cache-docs.component';
import {RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

describe('CacheDocsComponent', () => {
    let component: CacheDocsComponent;
    let fixture: ComponentFixture<CacheDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CacheDocsComponent],
                imports: [RouterModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CacheDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
