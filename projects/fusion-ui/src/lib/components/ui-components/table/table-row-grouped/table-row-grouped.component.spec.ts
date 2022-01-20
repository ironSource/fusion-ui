import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableRowGroupedComponent} from './table-row-grouped.component';
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
import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {TableRowComponent} from '../table-row/table-row.component';
import {NotAvailableModule} from '../../../../pipes/not-available/not-available.module';
import {GenericPipeModule} from '../../../../pipes/generic/generic.module';

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
