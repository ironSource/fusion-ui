import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table/table.component';
import {TableBasicComponent} from './table-basic/table-basic.component';
import {TableCellComponent} from './table-cell/table-cell.component';
import {TableEmptyComponent} from './table-empty/table-empty.component';
import {TableGroupedComponent} from './table-grouped/table-grouped.component';
import {TableLoadingComponent} from './table-loading/table-loading.component';
import {TableRowComponent} from './table-row/table-row.component';
import {TableRowGroupedComponent} from './table-row-grouped/table-row-grouped.component';
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
import {TableModuleOptions} from './entities/table-module-options';
import {TABLE_OPTIONS_DEFAULT_VALUES, TABLE_OPTIONS_TOKEN} from './table.config';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline';
import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message';
import {NotAvailableModule} from '@ironsource/fusion-ui/pipes/not-available';
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
