import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableCellComponent} from './table-cell.component';
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
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline';
import {TableService} from '../table.service';
import {NotAvailableModule} from '@ironsource/fusion-ui/pipes/not-available';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';

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
