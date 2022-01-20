/*
 * Created on 2020.12.2 By Andy Kononenko (andyk@ironsrc.com)
 */

import {TabsConfiguration} from '../../../../../../fusion-ui/src/lib/components/ui-components/tabs/tabs.entities';
import {PopupContentExampleComponent} from '../../../components/popup-content-example/popup-content-example.component';
import {Component, Type} from '@angular/core';

export const TABS_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tooltipContent: `aaaa tooltip!`
        },
        {
            text: 'Springfield',
            infoIcon: 'info-circle',
            popupContent: {
                type: PopupContentExampleComponent as Type<Component>,
                data: {
                    title: 'Title modal',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    moreInfo: {
                        url: 'http://google.com'
                    }
                }
            }
        },
        {
            text: 'Xian',
            tooltipContent: `Here's a tooltip!`,
            infoIcon: 'info-circle'
        },
        {
            text: 'Milwaukee',
            disabled: true
        }
    ]
};

export const TABS_ICON_TEXT_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            icon: 'alarm-clock',
            text: 'Johannesburg'
        },
        {
            icon: 'company',
            text: 'Springfield'
        },
        {
            icon: 'calendar',
            text: 'Xian'
        },
        {
            icon: 'chart-line',
            text: 'Milwaukee',
            disabled: true
        }
    ]
};

export const TABS_ICON_UP_TEXT_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            icon: 'alarm-clock',
            text: 'Johannesburg'
        },
        {
            icon: 'company',
            text: 'Springfield'
        },
        {
            icon: 'calendar',
            text: 'Xian'
        },
        {
            icon: 'chart-line',
            text: 'Milwaukee',
            disabled: true
        }
    ],
    verticalDisplay: true
};

export const TABS_ICON_ONLY_TEXT_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            icon: 'alarm-clock'
        },
        {
            icon: 'company',
            tooltipContent: `Here's a tooltip!`
        },
        {
            icon: 'calendar'
        },
        {
            icon: 'chart-line',
            disabled: true
        }
    ]
};
