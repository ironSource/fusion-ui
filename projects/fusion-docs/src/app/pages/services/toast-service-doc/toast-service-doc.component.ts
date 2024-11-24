import {Component} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-toast-service-doc',
    templateUrl: './toast-service-doc.component.html',
    styleUrls: ['./toast-service-doc.component.scss'],
    standalone: false
})
export class ToastServiceDocComponent {
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
                    label: 'Entities',
                    scrollTo: '#entities',
                    scrollOffset: 15
                }
            ]
        }
    ];
}
