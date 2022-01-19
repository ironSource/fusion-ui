import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatepickerDocsComponent} from './datepicker-docs.component';
import {DatepickerDocsRoutingModule} from './datepicker-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatepickerModule} from '@ironource/fusion-ui';

describe('DatepickerDocsComponent', () => {
    let component: DatepickerDocsComponent;
    let fixture: ComponentFixture<DatepickerDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DatepickerDocsComponent],
                imports: [
                    DatepickerDocsRoutingModule,
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    ReactiveFormsModule,
                    DatepickerModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DatepickerDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
