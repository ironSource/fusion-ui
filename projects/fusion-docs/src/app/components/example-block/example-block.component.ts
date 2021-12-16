import {Component, Input, OnInit, ViewEncapsulation, ContentChildren, QueryList} from '@angular/core';
import {ExampleBlockDirective} from './example-block.directive';

@Component({
    selector: 'fusion-example-block',
    templateUrl: './example-block.component.html',
    styleUrls: ['./example-block.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleBlockComponent implements OnInit {
    @ContentChildren(ExampleBlockDirective, {read: ExampleBlockDirective})
    set exampleTabs(value: QueryList<ExampleBlockDirective>) {
        if (value) {
            this.tabs = value.toArray();
            this.selectedTab = value.first;
        }
    }

    @Input() expand: any;
    @Input() collapsible: any;
    @Input() expandable: boolean;
    @Input() contentExpanded: boolean;
    @Input() title: string;
    @Input() desc: string;
    id: string;

    tabs: ExampleBlockDirective[];
    selectedTab: ExampleBlockDirective;

    constructor() {}

    ngOnInit() {
        this.collapsible = typeof this.collapsible === 'undefined' ? true : this.collapsible;
        this.expand = typeof this.expand === 'undefined' ? true : this.expand;
        this.id = this.makeId(this.title).toLowerCase();

        this.expandable = this.expandable || false;
        this.contentExpanded = this.contentExpanded || true;
    }

    expandCode() {
        this.expand = !this.expand;
    }

    makeId(input) {
        if (input) {
            input = input.replace(/&/g, 'and');
            return input.replace(/\s+/g, '-');
        }
    }

    toggleContent() {
        if (this.expandable) {
            this.contentExpanded = !this.contentExpanded;
        }
    }
}
