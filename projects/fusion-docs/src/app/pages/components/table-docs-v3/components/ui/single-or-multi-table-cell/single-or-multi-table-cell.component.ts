import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SingleOrMultiTableCell} from '../';

const MAX_LINES = 20;

@Component({
    selector: 'fusion-single-or-multi-table-cell',
    templateUrl: './single-or-multi-table-cell.component.html',
    styleUrls: ['./single-or-multi-table-cell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleOrMultiTableCellComponent implements OnInit {
    @Input() config: SingleOrMultiTableCell | undefined;

    tooltip = '';
    private maxLength = 500;
    ngOnInit(): void {
        if (this.config?.entities.length && this.config?.entities.length > 1) {
            const tooltipContentList = this.config.entities
                .reduce((acc: string[], curr) => {
                    return curr?.id ? [...acc, `${curr?.id || ''} ${curr?.displayText || ''}`] : acc;
                }, [])
                .join(' | ');
            this.tooltip =
                tooltipContentList.length > this.maxLength ? tooltipContentList.substring(0, this.maxLength) + '...' : tooltipContentList;
        }
    }
}
