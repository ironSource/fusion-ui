import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MonthPickerDocsComponent} from './month-picker-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {MonthPickerModule, TableModule} from '@ironsource/fusion-uifusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

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
