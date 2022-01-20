import {Component, OnInit} from '@angular/core';
import {TYPOGRAPHY_LIST, TYPOGRAPHY_LIST_WEBSITE} from './typography.config';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-typography-doc-v2',
    templateUrl: './typography-docs-v2.component.html',
    styleUrls: ['./typography-docs-v2.component.scss']
})
export class TypographyDocsV2Component implements OnInit {
    typographyList = TYPOGRAPHY_LIST;
    typographyWebsiteList = TYPOGRAPHY_LIST_WEBSITE;

    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Typography'
        });
    }
}
