import {Component} from '@angular/core';
import {TableModule} from '../table.module';

@Component({
    selector: 'fusion-table-story-wrapper',
    template: `<ng-content></ng-content>`,
    standalone: true,
    imports: [TableModule]
})
export class TableStoryWrapperComponent {}
