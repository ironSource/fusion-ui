import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {TableComponent} from './table/table.component';
import {TableBasicComponent} from './table-basic/table-basic.component';
import {TableCellComponent} from './table-cell/table-cell.component';
import {TableEmptyComponent} from './table-empty/table-empty.component';
import {TableGroupedComponent} from './table-grouped/table-grouped.component';
import {TableLoadingComponent} from './table-loading/table-loading.component';
import {TableRowComponent} from './table-row/table-row.component';
import {TableRowGroupedComponent} from './table-row-grouped/table-row-grouped.component';
import {IconModule} from '../icon/icon.module';
import {InputModule} from '../input/input.module';
import {LoaderModule} from '../loader/loader.module';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {LoaderInlineModule} from '../loader-inline/loader-inline.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {DropdownModule} from '../dropdown/dropdown/dropdown.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '../tooltip/tooltip.module';
import {ToggleModule} from '../toggle/toggle.module';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {TableModuleOptions} from './entities/table-module-options';
import {TABLE_OPTIONS_DEFAULT_VALUES, TABLE_OPTIONS_TOKEN} from './table.config';
import {MultiDropdownModule} from '../dropdown/multi-dropdown/multi-dropdown.module';
import {InputInlineModule} from '../input-inline/input-inline.module';
import {LoadMoreModule} from '../../../directives/load-more/load-more.module';
import {GenericPipeModule} from '../../../pipes/generic/generic.module';
import {ErrorMessageModule} from '../../../directives/error-message/error-message.module';
import {NotAvailableModule} from '../../../pipes/not-available/not-available.module';
import {ButtonModule} from '../button/button.module';

@NgModule({
    exports: [TableComponent],
    declarations: [
        TableComponent,
        TableBasicComponent,
        TableCellComponent,
        TableEmptyComponent,
        TableGroupedComponent,
        TableLoadingComponent,
        TableRowComponent,
        TableRowGroupedComponent
    ],
    imports: [
        CommonModule,
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
        ErrorMessageModule,
        NotAvailableModule,
        ButtonModule
    ],
    entryComponents: [TableComponent]
})
export class TableModule {
    static forRoot(options?: TableModuleOptions): ModuleWithProviders<TableModule> {
        return {
            ngModule: TableModule,
            providers: [
                {
                    provide: TABLE_OPTIONS_TOKEN,
                    useValue: options || TABLE_OPTIONS_DEFAULT_VALUES
                }
            ]
        };
    }
}
