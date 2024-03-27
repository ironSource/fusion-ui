export interface TableRowChangedData {
    rowIndex: string | number;
    rowSpanIndex?: number;
    rowModel: any;
    keyChanged: string;
    newValue: any;
    prevValue: any;
    onRequestDone?: Function;
}
