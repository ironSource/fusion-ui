import {TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';

export const TAGS_MOCK: TagComponentConfigurations[] = [
    {
        title: 'benjamin.ny@gmail.com'
    },
    {
        title: 'lior.raz@gmail.com'
    },
    {
        title: 'harason.bein@gmail.com'
    },
    {
        title: 'tal.barada@gmail.com'
    },
    {
        title: 'rotem.choen@gmail.com'
    }
];

export const TAGS_CLOSE_BUTTON_MOCK = TAGS_MOCK.map(tag => ({...tag, close: true}));

export const TAGS_ERROR_MOCK = TAGS_MOCK.map((tag, idx) => {
    return idx === 0 ? {title: 'benjamin.nygmail.com', error: 'Invalid emain'} : tag;
});
