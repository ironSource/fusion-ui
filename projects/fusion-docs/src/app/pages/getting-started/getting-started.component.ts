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
            name: 'Yossi Barda',
            email: 'yossi.bard@ironsrc.com',
            image: `${ASSET_PATH}/team/yossi.png`
        },
        {
            name: 'Daniel Brazg',
            email: 'daniel.brazg@ironsrc.com',
            image: `${ASSET_PATH}/team/daniel.png`
        },
        {
            name: 'Chen Levin',
            email: 'chen.levin@ironsrc.com',
            image: `${ASSET_PATH}/team/chen.png`
        },
        {
            name: 'Andy Kononenko',
            email: 'andyk@ironsrc.com',
            image: `${ASSET_PATH}/team/andy.png`
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

    download(download) {
        this.http.get(download.path, {responseType: 'blob'}).subscribe(data => {
            const blob = new Blob([data], {type: download.type});
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = download.name;
            a.click();
        });
    }
}
