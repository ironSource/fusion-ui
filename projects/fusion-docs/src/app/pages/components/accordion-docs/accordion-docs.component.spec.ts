/* eslint-disable max-len */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AccordionDocsComponent} from './accordion-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {AccordionModule} from '@ironsrc/fusion-ui';
import {AccordionExampleContentModule} from '../../../components/accordion-example-components/accordion-example-content/accordion-example-content.module';

describe('AccordionDocsComponent', () => {
    let component: AccordionDocsComponent;
    let fixture: ComponentFixture<AccordionDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AccordionDocsComponent],
                imports: [ExampleBlockModule, DocsMenuModule, CodeBlockModule, AccordionModule, AccordionExampleContentModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AccordionDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
