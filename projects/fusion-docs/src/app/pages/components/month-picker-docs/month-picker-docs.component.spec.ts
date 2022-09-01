import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MonthPickerDocsComponent} from './month-picker-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MonthPickerModule} from '@ironsource/fusion-ui/components/month-picker/v2';
import {TableModule} from '@ironsource/fusion-ui/components/table/v2';

describe('MonthPickerDocsComponent', () => {
    let component: MonthPickerDocsComponent;
    let fixture: ComponentFixture<MonthPickerDocsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MonthPickerDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ReactiveFormsModule, MonthPickerModule, TableModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MonthPickerDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
