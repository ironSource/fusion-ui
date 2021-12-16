/*
 * Created on 2021.3.16 By Andy Kononenko (andyk@ironsrc.com)
 */

import {TableColumnTypeEnum} from '../../../../../../fusion-ui/src/lib/components/ui-components/table/entities';

export const CSS_CUSTOM_PROPERTIES = {
    columns: [
        {
            key: 'name',
            title: 'Name',
            type: TableColumnTypeEnum.String
        },
        {
            key: 'description',
            title: 'Description',
            type: TableColumnTypeEnum.String
        }
    ],
    rows: [
        {
            name: '--fu-month-picker-color',
            description: 'Main color'
        },
        {
            name: '--fu-month-picker-width',
            description: 'default 100%; min-width: 220px; max-width: 300px;'
        },
        {
            name: '--fu-month-picker-height',
            description: 'Month picker (not selection element) height.'
        },
        {
            name: '--fu-month-picker-padding',
            description: 'Month picker (not selection element) padding.'
        },
        {
            name: '--fu-month-picker-border',
            description: 'Month picker (not selection element) border.'
        },
        {
            name: '--fu-month-picker-border-radius',
            description: 'Month picker (not selection element) border-radius.'
        },
        {
            name: '--fu-month-picker-calendar-icon-color',
            description: 'Month picker calendar icon color.'
        },
        {
            name: '--fu-month-picker-calendar-icon-size',
            description: 'Month picker calendar icon size.'
        },
        {
            name: '--fu-month-picker-arrow-icon-color',
            description: 'Month picker arrow (dropdown) color.'
        },
        {
            name: '--fu-month-picker-arrow-icon-size',
            description: 'Month picker arrow (dropdown) size.'
        },
        {
            name: '--fu-month-picker-selector-border',
            description: 'Month picker opened element border.'
        },
        {
            name: '--fu-month-picker-selector-border-radius',
            description: 'Month picker opened element border-radius.'
        },
        {
            name: '--fu-month-picker-selector-box-shadow',
            description: 'Month picker opened element box-shadow.'
        },
        {
            name: '--fu-month-picker-prev-icon-color',
            description: 'Month picker year selection previous arrow icon color'
        },
        {
            name: '--fu-month-picker-next-icon-color',
            description: 'Month picker year selection next arrow icon color'
        },
        {
            name: '--fu-month-picker-prev-icon-disabled-color',
            description: 'Month picker year selection previous disabled arrow icon color'
        },
        {
            name: '--fu-month-picker-next-icon-disabled-color',
            description: 'Month picker year selection next disabled arrow icon color'
        },
        {
            name: '--fu-month-picker-month-font-weight',
            description: 'Month picker month name font-weight'
        },
        {
            name: '--fu-month-picker-month-hover-bg-color',
            description: 'Month picker month name hover background color'
        },
        {
            name: '--fu-month-picker-month-current-dot-color',
            description: 'Month picker month name current month DOT color'
        },
        {
            name: '--fu-month-picker-month-disabled-color',
            description: 'Month picker month name disabled color'
        },
        {
            name: '--fu-month-picker-month-disabled-current-dot-color',
            description: 'Month picker month name current month disabled DOT color'
        },
        {
            name: '--fu-month-picker-month-selected-bg-color',
            description: 'Month picker month name selected background color'
        },
        {
            name: '--fu-month-picker-month-selected-current-dot-color',
            description: 'Month picker month name current month selected DOT color'
        },
        {
            name: '--fu-month-picker-disabled-color',
            description: 'Main color in disabled state'
        },
        {
            name: '--fu-month-picker-error-color',
            description: 'Month picker error message color'
        }
    ]
};
