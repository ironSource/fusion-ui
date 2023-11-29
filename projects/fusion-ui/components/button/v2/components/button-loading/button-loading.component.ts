import {Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-button-loading',
    templateUrl: 'button-loading.component.html',
    styleUrls: ['./button-loading.component.scss']
})
export class ButtonLoadingComponent {
    @Input() projectContent: boolean = false;
    @Input() buttonWithIcon: boolean = false;
}
