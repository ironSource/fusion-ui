import {TableMultipleActions, TableRowRemoveAction} from './table-row-remove-action';
import {TableColumn} from './table-column';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {EventEmitter} from '@angular/core';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';

export interface TableLabel {
    text: string;
    icon?: IconData;
    tooltip?: string;
}

export interface TableSearchOptions {
    placeholder?: string;
    onSearch?: EventEmitter<string>;
}

export interface TableOptions {
    tableId?: string; // auto-generated table id
    tableLabel?: TableLabel; // table label with info tooltip (v3)
    searchOptions?: TableSearchOptions; // table search (v3)
    hasReturnToTopButton?: boolean; // has return to top button
    scrollElementSelector?: string; // for vertically scroll listener - default table wrapper (v3)
    stickyHeaderTopOffset?: number; // offset top (px) for stickyHeader in case scrollElementSelector exist
    sortingType?: string;
    remove?: TableRowRemoveAction;
    rowActionsMenu?: TableMultipleActions;
    isAllRowsSelectable?: boolean;
    isLoadingOverlayMode?: boolean; // show data main loading as overlay on the whole table (if not set - default as true)
    noDataMessage?: string;
    noDataSubMessage?: string;
    noDataImageBgUrl?: string; // custom image for empty table as background URL (v3)
    customNoData?: DynamicComponentConfiguration; // user defined "no data" content
    isGroupedTable?: boolean;
    pagination?: TablePaginationOption;
    hasTotalsRow?: boolean;
    stickyHeader?: boolean; // is sticky header table
    hideHeaderOnEmpty?: boolean; // is need to hide columns headers if table empty
    cellBorders?: boolean;
    emptyTableIcon?: string;
    rowStyle?: any;
    rowHeight?: TableRowHeight;
    rowTrackingOption?: string;
    headerRowStyle?: any;
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
}

export interface TableRowsExpandableOptions {
    key: string;
    columns: TableColumn[];
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
