import {Directive, Input, OnInit} from '@angular/core';

@Directive()
export abstract class IconHeaderActionBaseComponent implements OnInit {
    @Input() componentData: any = {};
    @Input() isActive: boolean;
    @Input() isOpen: boolean;
    icon = 'filter-full';
    hideDropArrow = false;

    ngOnInit() {
        if (this.componentData && this.componentData.icon) {
            this.icon = this.componentData.icon;
            this.hideDropArrow = this.componentData.hideDropArrow;
        }
    }
}
