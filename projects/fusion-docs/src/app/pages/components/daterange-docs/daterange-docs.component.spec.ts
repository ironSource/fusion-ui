import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {DaterangeDocsComponent} from './daterange-docs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DaterangeModule} from '@ironsrc/fusion-ui';

describe('DaterangeDocsComponent', () => {
    let component: DaterangeDocsComponent;
    let fixture: ComponentFixture<DaterangeDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DaterangeDocsComponent],
                imports: [ReactiveFormsModule, FormsModule, DocsMenuModule, ExampleBlockModule, CodeBlockModule, DaterangeModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DaterangeDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
