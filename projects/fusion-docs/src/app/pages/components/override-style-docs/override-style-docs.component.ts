import {Component, OnInit} from '@angular/core';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-override-style-docs',
    templateUrl: './override-style-docs.component.html',
    styleUrls: ['./override-style-docs.component.scss']
})
export class OverrideStyleDocsComponent implements OnInit {
    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Override style'
        });
    }
}
