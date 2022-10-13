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
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v2';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v2';
import {ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {
    TABLE_OPTIONS_DEFAULT_VALUES,
    TABLE_OPTIONS_TOKEN,
    TableModuleOptions
} from '@ironsource/fusion-ui/components/table/common/entities';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline/v2';
import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message/v2';
import {NotAvailablePipe} from '@ironsource/fusion-ui/pipes/not-available';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

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
        NotAvailablePipe,
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
