import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDocsComponent} from './log-docs.component';
import {RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

describe('LogDocsComponent', () => {
    let component: LogDocsComponent;
    let fixture: ComponentFixture<LogDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LogDocsComponent],
            imports: [RouterModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
