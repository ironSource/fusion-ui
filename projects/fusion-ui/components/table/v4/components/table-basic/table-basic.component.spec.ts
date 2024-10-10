import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {TableBasicComponent} from './table-basic.component';

// todo: check this import
// import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
// import {NotAvailablePipe} from '@ironsource/fusion-ui/pipes/not-available';
// todo: check this versions
// import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
// import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline/v1';
// import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
// import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v1';
// import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
// import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
// import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
// import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v1';
// import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
// import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v1';


// import {TableCellComponent} from '../table-cell/table-cell.component';
// import {TableEmptyComponent} from '../table-empty/table-empty.component';
// import {TableGroupedComponent} from '../table-grouped/table-grouped.component';
// import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {TableRowComponent} from '../table-row/table-row.component';
// import {TableRowGroupedComponent} from '../table-row-grouped/table-row-grouped.component';



describe('TableBasicComponent', () => {
    let component: TableBasicComponent;
    let fixture: ComponentFixture<TableBasicComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                GenericPipe,
                TableBasicComponent,
                TableRowComponent
            ],
            providers: [TableService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});