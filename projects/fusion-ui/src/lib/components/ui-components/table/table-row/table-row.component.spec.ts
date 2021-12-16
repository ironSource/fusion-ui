import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {TableRowComponent} from './table-row.component';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {IconModule} from '../../icon/icon.module';
import {TableService} from '../table.service';
import {LogService} from '../../../../services/log/log.service';
import {By} from '@angular/platform-browser';
import {NotAvailableModule} from '../../../../pipes/not-available/not-available.module';
import {GenericPipeModule} from '../../../../pipes/generic/generic.module';

// do dummy component - holder
@Component({
    template: `
        <table>
            <tr
                fusionTableRow
                [options]="options"
                [rowIndex]="rowIndex"
                [row]="row"
                [columns]="columns"
                [isRowSelected]="isRowSelected"
                [ngClass]="{
                    'is-row-selected': isRowSelected,
                    'is-row-disabled': isRowDisabled
                }"
            ></tr>
        </table>
    `
})
class TestTableRowComponent {
    public rowIndex = 1;
    public row = [];
    public columns = [];
    public isRowSelected = false;
    public isRowDisabled = false;
    public options = {hasTotalsRow: false};
}

describe('TableRowComponent', () => {
    let component: TestTableRowComponent;
    let fixture: ComponentFixture<TestTableRowComponent>;
    let debugEl: DebugElement;
    let buttonEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [TestTableRowComponent, TableRowComponent, TableCellComponent],
            imports: [IconModule, TooltipModule, NotAvailableModule, GenericPipeModule],
            providers: [TableService, LogService]
        });

        fixture = TestBed.createComponent(TestTableRowComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        buttonEl = debugEl.query(By.css('button'));

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
