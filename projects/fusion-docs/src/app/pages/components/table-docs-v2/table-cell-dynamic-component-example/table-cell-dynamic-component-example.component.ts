import {Component, Input, OnInit} from '@angular/core';
import {isNullOrUndefined, StatusLabelConfig, StatusLabelStatus} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-table-cell-dynamic-component-example',
    templateUrl: './table-cell-dynamic-component-example.component.html',
    styleUrls: ['./table-cell-dynamic-component-example.component.scss']
})
export class TableCellDynamicComponentExampleComponent implements OnInit {
    @Input() status: StatusLabelStatus;
    statusLabelConfig: StatusLabelConfig = {};

    constructor() {}

    ngOnInit() {
        this.statusLabelConfig = {
            status: this.status,
            text: this.status === StatusLabelStatus.Warning ? 'Avg.' : this.status === StatusLabelStatus.Error ? 'Low' : 'High'
        };
    }
}
