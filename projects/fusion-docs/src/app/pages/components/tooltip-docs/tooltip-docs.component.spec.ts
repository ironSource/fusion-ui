import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TooltipDocsComponent} from './tooltip-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule, TooltipModule} from '@ironsource/fusion-ui';

describe('TooltipDocsComponent', () => {
    let component: TooltipDocsComponent;
    let fixture: ComponentFixture<TooltipDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TooltipDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    TooltipModule,
                    TableModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TooltipDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
