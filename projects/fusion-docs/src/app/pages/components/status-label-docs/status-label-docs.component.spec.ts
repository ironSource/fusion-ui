import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatusLabelDocsComponent} from './status-label-docs.component';
import {IconModule, StatusLabelModule, TableModule, TooltipModule} from '@ironsource/fusion-uifusion-ui';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';

describe('StatusLabelDocsComponent', () => {
    let component: StatusLabelDocsComponent;
    let fixture: ComponentFixture<StatusLabelDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [StatusLabelDocsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, StatusLabelModule, TooltipModule, TableModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(StatusLabelDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
