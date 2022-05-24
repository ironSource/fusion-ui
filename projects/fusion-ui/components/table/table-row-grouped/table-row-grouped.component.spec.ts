import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableRowGroupedComponent} from './table-row-grouped.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline';
import {TableService} from '../table.service';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TableEmptyComponent} from '../table-empty/table-empty.component';
import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {TableRowComponent} from '../table-row/table-row.component';
import {NotAvailableModule} from '@ironsource/fusion-ui/pipes/not-available';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown';

describe('TableRowGroupedComponent', () => {
    let component: TableRowGroupedComponent;
    let fixture: ComponentFixture<TableRowGroupedComponent>;

    beforeEach(
        waitForAsync(() => {
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
                    NotAvailableModule,
                    GenericPipeModule
                ],
                declarations: [TableRowGroupedComponent, TableCellComponent, TableEmptyComponent, TableLoadingComponent, TableRowComponent],
                providers: [TableService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableRowGroupedComponent);
        component = fixture.componentInstance;
        component.row = {};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
