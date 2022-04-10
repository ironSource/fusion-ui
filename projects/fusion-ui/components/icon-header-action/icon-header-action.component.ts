import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'fusion-icon-header-action',
    templateUrl: './icon-header-action.component.html',
    styleUrls: ['./icon-header-action.component.scss']
})
export class IconHeaderActionComponent implements OnInit {
    @Input() componentData: any = {};
    @Input() isActive: boolean;
    @Input() isOpen: boolean;
    icon = 'filter-full';
    hideDropArrow = false;

    constructor() {}

    ngOnInit() {
        if (this.componentData && this.componentData.icon) {
            this.icon = this.componentData.icon;
            this.hideDropArrow = this.componentData.hideDropArrow;
        }
    }
}
