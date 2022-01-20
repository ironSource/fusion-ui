import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableCellComponent} from './table-cell.component';
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
import {NotAvailableModule} from '../../../../pipes/not-available/not-available.module';
import {GenericPipeModule} from '../../../../pipes/generic/generic.module';

describe('TableCellComponent', () => {
    let component: TableCellComponent;
    let fixture: ComponentFixture<TableCellComponent>;

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
                declarations: [TableCellComponent],
                providers: [TableService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableCellComponent);
        component = fixture.componentInstance;
        component.options = {};
        component.column = {key: 'a'};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
