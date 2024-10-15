import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TableRowComponent} from './table-row.component';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {NotAvailablePipe} from '@ironsource/fusion-ui/pipes/not-available';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

// do dummy component - holder
@Component({
    standalone: true,
    template: `
        <table>
            <tr fusionTableRow
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [TestTableRowComponent, IconModule, TooltipModule, NotAvailablePipe, GenericPipe, TableRowComponent, TableCellComponent],
            providers: [TableService, LogService]
        });

        fixture = TestBed.createComponent(TestTableRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
