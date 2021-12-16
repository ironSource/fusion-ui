import {Component} from '@angular/core';

@Component({
    selector: 'fusion-copy-to-clipboard-docs',
    templateUrl: './copy-to-clipboard-docs.component.html',
    styleUrls: ['./copy-to-clipboard-docs.component.scss']
})
export class CopyToClipboardDocsComponent {
    rightMenu = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Inner Text',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Function',
                    scrollTo: '#typeFunction',
                    scrollOffset: 80
                }
            ]
        }
    ];

    copyFunction() {
        return 'Text from function';
    }
}
