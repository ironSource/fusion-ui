import {Component} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-cache-docs',
    templateUrl: './cache-docs.component.html',
    styleUrls: ['./cache-docs.component.scss']
})
export class CacheDocsComponent {
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
                },
                {
                    label: 'Entities',
                    scrollTo: '#entities',
                    scrollOffset: 15
                }
            ]
        }
    ];
}
