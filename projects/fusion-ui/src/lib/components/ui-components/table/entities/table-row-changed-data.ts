export interface TableRowChangedData {
    rowIndex: string | number;
    rowModel: any;
    keyChanged: string;
    newValue: any;
    prevValue: any;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onRequestDone?: Function;
}
