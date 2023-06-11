import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GETTING_STARTED_PAGE_TEXTS} from './texts';
import {environment} from '../../../environments/environment';
import {DocsLayoutService} from '../docs/docs-layout.service';
const ASSET_PATH = `${environment.assetsPath}/images`;
@Component({
    selector: 'fusion-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
    text = GETTING_STARTED_PAGE_TEXTS;
    team = [
        {
            name: 'Daniel Brazg',
            email: 'daniel.brazg@is.com',
            image: `${ASSET_PATH}/people/daniel.jpeg`
        },
        {
            name: 'Chen Levin',
            email: 'chen.levin@is.com',
            image: `${ASSET_PATH}/people/chen.jpeg`
        },
        {
            name: 'Andy Kononenko',
            email: 'andyk@is.com',
            image: `${ASSET_PATH}/people/andy.jpeg`
        },
        {
            name: 'Amit Mor',
            email: 'amit.mor@is.com',
            image: `${ASSET_PATH}/people/amit.png`
        }
    ];
    constructor(private http: HttpClient, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Getting started'
        });
    }

    copyToClipboard(text) {
        return () => text;
    }
}
