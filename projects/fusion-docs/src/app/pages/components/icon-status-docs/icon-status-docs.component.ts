import {Component} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-icon-status-docs',
    templateUrl: './icon-status-docs.component.html',
    styleUrls: ['./icon-status-docs.component.scss']
})
export class IconStatusDocsComponent {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Icons',
            items: [
                {
                    label: 'Icon - Status',
                    scrollTo: '#icoStatus',
                    scrollOffset: 30
                }
            ]
        }
    ];
}
