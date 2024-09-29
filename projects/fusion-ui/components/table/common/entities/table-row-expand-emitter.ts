import {InnerEntityType} from './table-options';

export interface TableRowExpandEmitter {
    rowIndex: string | number;
    row: any;
    isExpanded: boolean;
    successCallback?: () => void;
    failedCallback?: () => void;
    updateMap?: boolean;
    innerEntityType?: InnerEntityType;
}
