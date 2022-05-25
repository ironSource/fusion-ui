import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {TableBasicComponent} from './components/table-basic/table-basic.component';
import {TableCellComponent} from './components/table-cell/table-cell.component';
import {TableEmptyComponent} from './components/table-empty/table-empty.component';
import {TableGroupedComponent} from './components/table-grouped/table-grouped.component';
import {TableLoadingComponent} from './components/table-loading/table-loading.component';
import {TableRowComponent} from './components/table-row/table-row.component';
import {TableRowGroupedComponent} from './components/table-row-grouped/table-row-grouped.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v1';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {
    TABLE_OPTIONS_DEFAULT_VALUES,
    TABLE_OPTIONS_TOKEN,
    TableModuleOptions
} from '@ironsource/fusion-ui/components/table/common/entities';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline/v1';
import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message/v1';
import {NotAvailableModule} from '@ironsource/fusion-ui/pipes/not-available';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';

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
    ]
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
