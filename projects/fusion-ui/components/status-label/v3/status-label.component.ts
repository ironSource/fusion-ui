import {Component, Input} from '@angular/core';
import {StatusLabelType} from './status-label.entity';

@Component({
    selector: 'fusion-status-label',
    templateUrl: './status-label.component.html',
    styleUrls: ['./status-label.component.scss'],
    host: {'ui-version': '3'}
})
export class StatusLabelComponent {
    @Input() set flat(value: boolean) {
        this._flat = value;
    }
    get flat(): boolean {
        return this._flat;
    }
    private _flat = false;

    @Input() set status(value: StatusLabelType) {
        this._status = value;
    }
    get status(): StatusLabelType {
        return this._status;
    }
    private _status: StatusLabelType;
}
