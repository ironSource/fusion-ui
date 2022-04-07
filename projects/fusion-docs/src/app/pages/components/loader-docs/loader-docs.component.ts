import {Component, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {StyleVersion} from '@ironsource/fusion-ui';
import {BehaviorSubject} from 'rxjs';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-loader-docs',
    templateUrl: './loader-docs.component.html',
    styleUrls: ['./loader-docs.component.scss']
})
export class LoaderDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Loader',
                    scrollTo: '#typeLoader',
                    scrollOffset: 80
                },
                {
                    label: 'Text Loader',
                    scrollTo: '#typeLoaderText',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Size',
                    scrollTo: '#variationsSize',
                    scrollOffset: 30,
                    styleVersions: [1]
                },
                {
                    label: 'Inline Loader',
                    scrollTo: '#variationsInline',
                    scrollOffset: 0
                },
                {
                    label: 'Custom Loader',
                    scrollTo: '#customLoader',
                    scrollOffset: 0
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                }
            ]
        }
    ];

    isLoaded$ = new BehaviorSubject<boolean>(false);
    styleVersion = StyleVersion;
    selectedVersion$ = this.versionService.styleVersion$;

    constructor(private versionService: VersionService, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Loader'
        });
    }

    onToggleClicked() {
        this.isLoaded$.next(!this.isLoaded$.getValue());
    }
}
