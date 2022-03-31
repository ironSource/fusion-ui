/*
 * Created on 2020.12.2 By Andy Kononenko (andyk@ironsrc.com)
 */

import {TabsConfiguration} from '@ironsource/fusion-ui';
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
            infoIcon: {iconName: 'info-circle', iconVersion: 'v2'},
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
            infoIcon: {iconName: 'info-circle', iconVersion: 'v2'}
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
            icon: {iconName: 'alarm-clock', iconVersion: 'v2'},
            text: 'Johannesburg'
        },
        {
            icon: {iconName: 'company', iconVersion: 'v2'},
            text: 'Springfield'
        },
        {
            icon: {iconName: 'calendar', iconVersion: 'v2'},
            text: 'Xian'
        },
        {
            icon: {iconName: 'chart-line', iconVersion: 'v2'},
            text: 'Milwaukee',
            disabled: true
        }
    ]
};

export const TABS_ICON_UP_TEXT_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            icon: {iconName: 'alarm-clock', iconVersion: 'v2'},
            text: 'Johannesburg'
        },
        {
            icon: {iconName: 'company', iconVersion: 'v2'},
            text: 'Springfield'
        },
        {
            icon: {iconName: 'calendar', iconVersion: 'v2'},
            text: 'Xian'
        },
        {
            icon: {iconName: 'chart-line', iconVersion: 'v2'},
            text: 'Milwaukee',
            disabled: true
        }
    ],
    verticalDisplay: true
};

export const TABS_ICON_ONLY_TEXT_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            icon: {iconName: 'alarm-clock', iconVersion: 'v2'}
        },
        {
            icon: {iconName: 'company', iconVersion: 'v2'},
            tooltipContent: `Here's a tooltip!`
        },
        {
            icon: {iconName: 'calendar', iconVersion: 'v2'}
        },
        {
            icon: {iconName: 'chart-line', iconVersion: 'v2'},
            disabled: true
        }
    ]
};
