import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {TableBasicComponent} from './components/table-basic/table-basic.component';
import {TableCellComponent} from './components/table-cell/table-cell.component';
import {TableEmptyComponent} from './components/table-empty/table-empty.component';
import {TableGroupedComponent} from './components/table-grouped/table-grouped.component';
import {TableLoadingComponent} from './components/table-loading/table-loading.component';
import {TableRowComponent} from './components/table-row/table-row.component';
import {TableRowGroupedComponent} from './components/table-row-grouped/table-row-grouped.component';
import {
    TABLE_OPTIONS_DEFAULT_VALUES,
    TABLE_OPTIONS_TOKEN,
    TableModuleOptions
} from '@ironsource/fusion-ui/components/table/common/entities';

import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v3';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v2';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v3';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';
import {InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline/v3';
import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message/v3';
import {NotAvailablePipe} from '@ironsource/fusion-ui/pipes/not-available';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {MenuDropComponent} from '@ironsource/fusion-ui/components/menu-drop';
import {TeleportingModule} from '@ironsource/fusion-ui/directives/teleporting';
import {RepositionDirective} from '@ironsource/fusion-ui/directives/reposition';
import {SearchComponent} from '@ironsource/fusion-ui/components/search';

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
        InputInlineComponent,
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
        GenericPipe,
        LoadMoreModule,
        ErrorMessageModule,
        NotAvailablePipe,
        ButtonModule,
        MenuDropComponent,
        RepositionDirective,
        TeleportingModule,
        SearchComponent
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
