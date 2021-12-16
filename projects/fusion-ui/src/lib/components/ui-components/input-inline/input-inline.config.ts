/*
 * Created on 2020.4.19 By Andy Kononenko (andyk@ironsrc.com)
 */

export interface InputInlineConfigByStyle {
    iconEdit: string | {iconName: string; iconVersion?: string};
    iconSave: string | {iconName: string; iconVersion?: string};
    loadingSize: string;
}

export const CONFIG_INPUT_INLINE_BY_UI_STYLE: {[styleKey: string]: InputInlineConfigByStyle} = {
    style_v1: {
        iconEdit: {iconName: 'edit', iconVersion: 'v1'},
        iconSave: {iconName: 'check-v-2', iconVersion: 'v1'},
        loadingSize: 'small'
    },
    style_v2: {
        iconEdit: 'pen',
        iconSave: 'check',
        loadingSize: 'inline'
    }
};
