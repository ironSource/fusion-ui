import {Component, OnInit} from '@angular/core';
import {StyleVersion, VersionService} from '@ironsource/fusion-ui';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-button-docs',
    templateUrl: './button-docs.component.html',
    styleUrls: ['./button-docs.component.scss']
})
export class ButtonDocsComponent implements OnInit {
    model: any;

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Regular',
                    scrollTo: '#typeRegular',
                    scrollOffset: 30
                },
                {
                    label: 'Stroke',
                    scrollTo: '#typeStroke',
                    scrollOffset: 15,
                    styleVersions: [1]
                },
                {
                    label: 'Link',
                    scrollTo: '#typeLink',
                    scrollOffset: 15,
                    styleVersions: [2]
                },
                {
                    label: 'Color',
                    scrollTo: '#typeColor',
                    scrollOffset: 15
                },
                {
                    label: 'Transparent',
                    scrollTo: '#typeTransparent',
                    scrollOffset: 15,
                    styleVersions: [2]
                },
                {
                    label: 'Icon',
                    scrollTo: '#typeIcon',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Disabled',
                    scrollTo: '#buttonDisabled',
                    scrollOffset: 30
                },
                {
                    label: 'Loading',
                    scrollTo: '#buttonLoading',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Size',
            items: [
                {
                    label: 'Minimum Width',
                    scrollTo: '#buttonSize',
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
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                }
            ]
        }
    ];

    buttonIcon = 'activate';
    isLoading = false;

    styleVersion = StyleVersion;
    selectedVersion$ = this.versionService.styleVersion$;

    constructor(private versionService: VersionService, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Button'
        });
    }

    onTestClick() {
        this.buttonIcon = null;
        this.isLoading = true;
        setTimeout(_ => {
            this.isLoading = false;
            this.buttonIcon = 'check-v-2';
        }, 2000);
    }

    onClick($event?) {
        if ($event) {
            $event.preventDefault();
        }
        console.log('Click');
        this.isLoading = true;
        setTimeout(_ => {
            this.isLoading = false;
        }, 2000);
    }
}
