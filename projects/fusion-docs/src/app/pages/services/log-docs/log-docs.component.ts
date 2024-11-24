import {Component} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-log-docs',
    templateUrl: './log-docs.component.html',
    styleUrls: ['./log-docs.component.scss'],
    standalone: false
})
export class LogDocsComponent {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'How To Use',
                    scrollTo: '#howToUse',
                    scrollOffset: 30
                },
                {
                    label: 'Methods',
                    scrollTo: '#methods',
                    scrollOffset: 15
                }
            ]
        }
    ];
}
