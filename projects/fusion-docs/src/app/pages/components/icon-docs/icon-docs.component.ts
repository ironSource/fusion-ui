import {Component, OnInit} from '@angular/core';
import {iconsList} from './icon-docs-config';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';

@Component({
    selector: 'fusion-icon-docs',
    templateUrl: './icon-docs.component.html',
    styleUrls: ['./icon-docs.component.scss']
})
export class IconDocsComponent implements OnInit {
    commonState: any;
    iconNames: string[];
    flagNames: string[];
    logosNames: string[];
    webIcon = {iconName: 'web', iconVersion: 'v1'};
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Icons',
            items: [
                {
                    label: 'How to use',
                    scrollTo: '#icoHowTo',
                    scrollOffset: 30
                },
                {
                    label: 'Icons Library',
                    scrollTo: '#icoLib',
                    scrollOffset: 15
                },
                {
                    label: 'Networks Logos',
                    scrollTo: '#networkLib',
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

    constructor() {}

    ngOnInit() {
        this.iconNames = iconsList;
        this.logosNames = [
            'ad-colony',
            'aerserv',
            'app-nexus',
            'applovin',
            'backfill',
            'bright-roll',
            'chartboost',
            'cross-promotion',
            'domob',
            'facebook',
            'flurry',
            'inmobi',
            'inneractive',
            'iron-source',
            'ironsorce-network',
            'ironsource-backfill',
            'media-brix',
            'millennial-media',
            'mobfox',
            'mobile-core',
            'native-x',
            'one-by-aol-mobile',
            'personagraph',
            'rubicon-project',
            'smaato',
            'spotx',
            'tapjoy',
            'tappx',
            'tapsense',
            'tremor-video',
            'unity-ads',
            'vungle',
            'yu-me'
        ].sort();
    }
}
