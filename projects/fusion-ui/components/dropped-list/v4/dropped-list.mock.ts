import {
    MOCK_OPTIONS_COUNTRIES,
    MOK_APPLICATIONS_ONE_LINE_OPTIONS
} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {CountryCode} from '@ironsource/fusion-ui/components/flag/v4';

export const BASE_LIST_OPTIONS = new Array(10).fill(null).map((_, index) => ({
    label: `Option ${index + 1}`
}));

export const COUNTRY_LIST_OPTIONS = MOCK_OPTIONS_COUNTRIES.map(country => ({
    flag: country.flag.toLowerCase() as CountryCode,
    label: country.title
}));

export const APPLICATION_LIST_OPTIONS = MOK_APPLICATIONS_ONE_LINE_OPTIONS.map(country => ({
    label: country.displayText,
    imageUrl: country.image
}));
