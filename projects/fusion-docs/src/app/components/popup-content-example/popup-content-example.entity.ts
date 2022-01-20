/*
 * Created on 2020.12.13 By Andy Kononenko (andyk@ironsrc.com)
 */

export interface PopupContentExampleEntity {
    title?: string;
    content: string;
    moreInfo?: {
        label?: string;
        url: string;
    };
}
