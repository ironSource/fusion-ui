import {Component} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-notification-service-doc',
    templateUrl: './notification-service-doc.component.html',
    styleUrls: ['./notification-service-doc.component.scss'],
    standalone: false
})
export class NotificationServiceDocComponent {
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
