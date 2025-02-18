import {TableMultipleActions, TableRowRemoveAction} from './table-row-remove-action';
import {TableColumn} from './table-column';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {EventEmitter} from '@angular/core';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';
import {EmptyStateType} from '@ironsource/fusion-ui/components/empty-state/v4';

export interface TableLabel {
    text: string;
    icon?: IconData;
    tooltip?: string;
}

export interface TableSearchOptions {
    placeholder?: string;
    onSearch?: EventEmitter<string>;
    initalValue?: string;
}

export interface TableOptions {
    tableId?: string; // auto-generated table id
    tableLabel?: TableLabel; // table label with info tooltip (v3)
    noTableFooter?: boolean; // no display table footer
    searchOptions?: TableSearchOptions; // table search (v3)
    hasReturnToTopButton?: boolean; // has return to top button
    scrollElementSelector?: string; // for vertically scroll listener - default table wrapper (v3)
    stickyHeaderTopOffset?: number; // offset top (px) for stickyHeader in case scrollElementSelector exist
    sortingType?: string; // 'external' for back-end sorting
    remove?: TableRowRemoveAction;
    rowActionsMenu?: TableMultipleActions;
    isAllRowsSelectable?: boolean;
    isLoadingOverlayMode?: boolean; // show data main loading as overlay on the whole table (if not set - default as true)
    noDataMessage?: string;
    noDataSubMessage?: string;
    noDataImageBgUrl?: string; // custom image for empty table as background URL (v3)
    emptyTableIcon?: string;
    emptyTableType?: EmptyStateType; // used for empty table v4 state
    customNoData?: DynamicComponentConfiguration; // user defined "no data" content
    isGroupedTable?: boolean;
    pagination?: TablePaginationOption;
    hasTotalsRow?: boolean;
    stickyHeader?: boolean; // is sticky header table
    hideHeaderOnEmpty?: boolean; // is need to hide columns headers if table empty
    cellBorders?: boolean;
    rowStyle?: any;
    rowHeight?: TableRowHeight;
    rowTrackingOption?: string;
    headerRowStyle?: any;
    hasRowSpan?: boolean;
    rowsExpandableOptions?: TableRowsExpandableOptions;
    rowsOptions?: {
        [rowNumber: number]: TableRowOptions;
        global?: TableRowOptions;
        headerRow?: TableRowOptions;
        ignoredParentSelectorsRowClickEvent?: string[];
    };
    notAvailableText?: string;
    isFloatingActionDisabled?(row: any, action?: MenuDropItem): boolean;
    isRemoveIconHiddenForRow?(row: any): boolean;
    infoIconForRowOnHover?(row: any): string;
}

export interface TablePaginationOption {
    enable: boolean;
    loading?: boolean;
    handleLoadingFromHost?: boolean;
}

export interface TableRowOptions {
    [optionName: string]: any;
}

export interface TableRowMetaData {
    readonly?: boolean;
    inRequest?: boolean;
    disabled?: boolean;
    cellToolTip?: {[columnKey: string]: string};
    rowspanColumnsData?: {[key: string]: number};
    maxRowspanInColumn?: number;
}

export type InnerEntityType = 'innerRows' | 'dynamicComponent'; // used in table v4 default is 'innerRows'

export interface TableRowsExpandableOptions {
    key: string;
    columns: TableColumn[];
    innerEntityType?: InnerEntityType;
    sticky?: boolean;
    keyToIgnore?: string;
    expandLevels?: number;
    expendChunkSize?: number;
}

export enum TableRowHeight {
    Small = 'small',
    Medium = 'medium',
    Big = 'big'
}
