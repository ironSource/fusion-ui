import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableBasicComponent} from './table-basic.component';
import {IconModule} from '../../icon/icon.module';
import {InputModule} from '../../input/input.module';
import {LoaderModule} from '../../loader/loader.module';
import {CheckboxModule} from '../../checkbox/checkbox.module';
import {LoaderInlineModule} from '../../loader-inline/loader-inline.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {DropdownModule} from '../../dropdown/dropdown/dropdown.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {ToggleModule} from '../../toggle/toggle.module';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {MultiDropdownModule} from '../../dropdown/multi-dropdown/multi-dropdown.module';
import {InputInlineModule} from '../../input-inline/input-inline.module';
import {TableService} from '../table.service';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TableEmptyComponent} from '../table-empty/table-empty.component';
import {TableGroupedComponent} from '../table-grouped/table-grouped.component';
import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {TableRowComponent} from '../table-row/table-row.component';
import {TableRowGroupedComponent} from '../table-row-grouped/table-row-grouped.component';
import {GenericPipeModule} from '../../../../pipes/generic/generic.module';
import {LoadMoreModule} from '../../../../directives/load-more/load-more.module';
import {NotAvailableModule} from '../../../../pipes/not-available/not-available.module';

describe('TableBasicComponent', () => {
    let component: TableBasicComponent;
    let fixture: ComponentFixture<TableBasicComponent>;

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
                    GenericPipeModule,
                    LoadMoreModule,
                    NotAvailableModule
                ],
                declarations: [
                    TableBasicComponent,
                    TableCellComponent,
                    TableEmptyComponent,
                    TableGroupedComponent,
                    TableLoadingComponent,
                    TableRowComponent,
                    TableRowGroupedComponent
                ],
                providers: [TableService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
