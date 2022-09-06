import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatusLabelDocsComponent} from './status-label-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {StatusLabelModule} from '@ironsource/fusion-ui/components/status-label/v2';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {TableModule} from '@ironsource/fusion-ui/components/table/v2';

describe('StatusLabelDocsComponent', () => {
    let component: StatusLabelDocsComponent;
    let fixture: ComponentFixture<StatusLabelDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StatusLabelDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, StatusLabelModule, TooltipModule, TableModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StatusLabelDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
