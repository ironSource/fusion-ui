import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableGroupedComponent} from './table-grouped.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v1';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline/v1';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TableEmptyComponent} from '../table-empty/table-empty.component';
import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {TableRowComponent} from '../table-row/table-row.component';
import {TableRowGroupedComponent} from '../table-row-grouped/table-row-grouped.component';
import {NotAvailablePipe} from '@ironsource/fusion-ui/pipes/not-available';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

describe('TableGroupedComponent', () => {
    let component: TableGroupedComponent;
    let fixture: ComponentFixture<TableGroupedComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                IconModule,
                InputModule,
                InputInlineModule,
                LoaderModule,
                LoaderInlineModule,
                CheckboxModule,
                DynamicComponentsModule,
                DropdownModule,
                MultiDropdownModule,
                TooltipModule,
                ToggleModule,
                ClickOutsideModule,
                ReactiveFormsModule,
                NotAvailablePipe,
                GenericPipe
            ],
            declarations: [
                TableGroupedComponent,
                TableCellComponent,
                TableEmptyComponent,
                TableGroupedComponent,
                TableLoadingComponent,
                TableRowComponent,
                TableRowGroupedComponent
            ],
            providers: [TableService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableGroupedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
