import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {TABS_BASE_MOCK, TABS_ICON_ONLY_TEXT_BASE_MOCK, TABS_ICON_TEXT_BASE_MOCK, TABS_ICON_UP_TEXT_BASE_MOCK} from './tabs.mocks';
import {PopupComponentContent} from '@ironsource/fusion-ui/components/popup/common/entities';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {TabConfiguration} from '@ironsource/fusion-ui/components/tabs/v2';

@Component({
    selector: 'fusion-tabs-docs',
    templateUrl: './tabs-docs.component.html',
    styleUrls: ['./tabs-docs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Default',
                    scrollTo: '#basicDefault',
                    scrollOffset: 80
                },
                {
                    label: 'With Icon',
                    scrollTo: '#typeBasicIcons',
                    scrollOffset: 80
                },
                {
                    label: 'With Icon Up',
                    scrollTo: '#typeBasicIconsUp',
                    scrollOffset: 80
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
                },
                {
                    label: 'CSS Vars',
                    scrollTo: '#cssVars',
                    scrollOffset: 30
                }
            ]
        }
    ];

    baseTabs = {...TABS_BASE_MOCK};
    baseIconTabs = {...TABS_ICON_TEXT_BASE_MOCK};
    baseIconUpTabs = {...TABS_ICON_UP_TEXT_BASE_MOCK, ...{tabWidth: 140}};
    iconsOnlyTabs = {...TABS_ICON_ONLY_TEXT_BASE_MOCK};
    iconsOnlyTabs2 = {...TABS_ICON_ONLY_TEXT_BASE_MOCK};

    selectedTab: TabConfiguration;
    selectedIconsTab: TabConfiguration;
    selectedIconsUpTab: TabConfiguration;
    selectedIconsOnlyTab: TabConfiguration;
    selectedIconsOnlyTab2: TabConfiguration;

    ppConfig: PopupComponentContent; // = TABS_BASE_MOCK.tabs[1].popupContent;

    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit(): void {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Tabs'
        });
    }
}
