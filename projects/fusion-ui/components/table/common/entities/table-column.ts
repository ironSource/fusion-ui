import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {TableColumnTypeEnum} from './table-column-type.enum';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {EventEmitter} from '@angular/core';
import {CellPosition} from './table-cell-position';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

export type TableCellAlign = 'left' | 'center' | 'right';

export interface TableColumn {
    key: string;
    title?: string;
    groupName?: string;
    type?: TableColumnTypeEnum;
    inputType?: InlineInputType;
    totalRowTypeAsString?: boolean; // data type represent in total string. default true
    component?: any;
    sort?: string;
    class?: string;
    width?: string;
    style?: any;
    align?: TableCellAlign;
    headerAlign?: TableCellAlign;
    tooltip?: string;
    tooltipIcon?: IconData;
    pipeOptions?: string;
    dataParser?: (data: any) => any; // used for data parsing (null to Undefined in budget for example)
    // customErrorMapping example, turn pattern error to decimal error: { pattern: { error: 'decimalMax', values: {'decimalMax': 2}}}
    customErrorMapping?: {
        [errorKey: string]: {
            errorMessageKey: string;
            textMapping?: {key: string; value: string}[];
        };
    };
    filter?: {
        options: DropdownOption[];
        selected?: DropdownOption[];
        onChange?: EventEmitter<any>;
    };
    sticky?: boolean;
    stickyLeftMargin?: string;
    dateFormat?: string;
    ignoreTimeZone?: boolean;
    colspan?: number;
    renderNativeElement?: (data: any, position: CellPosition, row: {[key: string]: any}) => Node;
    currencyPipeParameters?: CurrencyPipeParameters;
}

export interface CurrencyPipeParameters {
    currencyCode?: string; // The ISO 4217 currency code, such as USD for the US dollar and EUR for the euro.
    // eslint-disable-next-line max-len
    display?: 'code' | 'symbol' | 'symbol-narrow' | string; //  code: Show the code (such as "USD"), 'symbol': Show the symbol (such as "$").
    digitsInfo?: string; // '1.2-4'; {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}.
}
