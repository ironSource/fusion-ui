import {Component, Input} from '@angular/core';
import {IconStatusOption} from '@ironource/fusion-ui';

@Component({
    selector: 'fusion-ab-test-option',
    templateUrl: './ab-test-option.component.html',
    styleUrls: ['./ab-test-option.component.scss']
})
export class AbTestOptionComponent {
    @Input() set status(status: 'active' | 'internal' | 'completed') {
        this.statusText = status;
        switch (status) {
            case 'active':
                this.statusOption.color = 'green';
                break;
            case 'internal':
                this.statusOption.color = 'orange';
                break;
            case 'completed':
                this.statusOption.color = 'grey';
                break;
            default:
                this.statusOption.color = 'red';
                break;
        }
    }
    @Input() testName: string;
    @Input() testVersion: number;

    statusText: string;
    statusOption: IconStatusOption = {};
}
