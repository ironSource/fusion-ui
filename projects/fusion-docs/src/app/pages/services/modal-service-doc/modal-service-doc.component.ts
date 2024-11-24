import {Component} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-modal-service-doc',
    templateUrl: './modal-service-doc.component.html',
    styleUrls: ['./modal-service-doc.component.scss'],
    standalone: false
})
export class ModalServiceDocComponent {
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
