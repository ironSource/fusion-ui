import {TestBed} from '@angular/core/testing';
import {DropdownService} from './dropdown.service';

/* eslint-disable max-len */
const MOCK_GROUP_SUBGROUP_OPTIONS = [
    {
        id: 'Revenue metrics',
        displayText: 'Revenue metrics',
        childOptions: [
            {
                id: 'Ad Revenue',
                displayText: 'Ad Revenue',
                childOptions: [
                    {
                        id: 'ad_revenue_1d',
                        displayText: 'D1'
                    },
                    {
                        id: 'ad_revenue_3d',
                        displayText: 'D3'
                    },
                    {
                        id: 'ad_revenue_7d',
                        displayText: 'D7'
                    },
                    {
                        id: 'ad_revenue_14d',
                        displayText: 'D14'
                    },
                    {
                        id: 'ad_revenue_30d',
                        displayText: 'D30'
                    }
                ]
            },
            {
                id: 'IAP Revenue',
                displayText: 'IAP Revenue',
                childOptions: [
                    {
                        id: 'iap_revenue_1d',
                        displayText: 'D1'
                    },
                    {
                        id: 'iap_revenue_3d',
                        displayText: 'D3'
                    },
                    {
                        id: 'iap_revenue_7d',
                        displayText: 'D7'
                    },
                    {
                        id: 'iap_revenue_14d',
                        displayText: 'D14'
                    },
                    {
                        id: 'iap_revenue_30d',
                        displayText: 'D30'
                    }
                ]
            },
            {
                id: 'Total Revenue',
                displayText: 'Total Revenue',
                childOptions: [
                    {
                        id: 'total_revenue_1d',
                        displayText: 'D1'
                    },
                    {
                        id: 'total_revenue_3d',
                        displayText: 'D3'
                    },
                    {
                        id: 'total_revenue_7d',
                        displayText: 'D7'
                    },
                    {
                        id: 'total_revenue_14d',
                        displayText: 'D14'
                    },
                    {
                        id: 'total_revenue_30d',
                        displayText: 'D30'
                    }
                ]
            },
            {
                id: 'ROAS',
                displayText: 'ROAS',
                childOptions: [
                    {
                        id: 'roas_1d',
                        displayText: 'D1'
                    },
                    {
                        id: 'roas_3d',
                        displayText: 'D3'
                    },
                    {
                        id: 'roas_7d',
                        displayText: 'D7'
                    },
                    {
                        id: 'roas_14d',
                        displayText: 'D14'
                    },
                    {
                        id: 'roas_30d',
                        displayText: 'D30'
                    }
                ]
            }
        ]
    },
    {
        id: 'Retention metrics',
        displayText: 'Retention metrics',
        childOptions: [
            {
                id: 'Retention',
                displayText: 'Retention',
                childOptions: [
                    {
                        id: 'retention_1d',
                        displayText: 'D1'
                    },
                    {
                        id: 'retention_3d',
                        displayText: 'D3'
                    },
                    {
                        id: 'retention_7d',
                        displayText: 'D7'
                    },
                    {
                        id: 'retention_14d',
                        displayText: 'D14'
                    },
                    {
                        id: 'retention_30d',
                        displayText: 'D30'
                    }
                ]
            }
        ]
    }
];
const MOCK_GROUP_SUBGROUP_OPTIONS_PREPARED =
    '[{"id":"Revenue metrics","isGroup":true,"displayText":"Revenue metrics"},{"id":"Ad Revenue","displayText":"Ad Revenue","childOptions":[{"id":"ad_revenue_1d","displayText":"D1"},{"id":"ad_revenue_3d","displayText":"D3"},{"id":"ad_revenue_7d","displayText":"D7"},{"id":"ad_revenue_14d","displayText":"D14"},{"id":"ad_revenue_30d","displayText":"D30"}]},{"id":"IAP Revenue","displayText":"IAP Revenue","childOptions":[{"id":"iap_revenue_1d","displayText":"D1"},{"id":"iap_revenue_3d","displayText":"D3"},{"id":"iap_revenue_7d","displayText":"D7"},{"id":"iap_revenue_14d","displayText":"D14"},{"id":"iap_revenue_30d","displayText":"D30"}]},{"id":"Total Revenue","displayText":"Total Revenue","childOptions":[{"id":"total_revenue_1d","displayText":"D1"},{"id":"total_revenue_3d","displayText":"D3"},{"id":"total_revenue_7d","displayText":"D7"},{"id":"total_revenue_14d","displayText":"D14"},{"id":"total_revenue_30d","displayText":"D30"}]},{"id":"ROAS","displayText":"ROAS","childOptions":[{"id":"roas_1d","displayText":"D1"},{"id":"roas_3d","displayText":"D3"},{"id":"roas_7d","displayText":"D7"},{"id":"roas_14d","displayText":"D14"},{"id":"roas_30d","displayText":"D30"}]},{"id":"Retention metrics","isGroup":true,"displayText":"Retention metrics"},{"id":"Retention","displayText":"Retention","childOptions":[{"id":"retention_1d","displayText":"D1"},{"id":"retention_3d","displayText":"D3"},{"id":"retention_7d","displayText":"D7"},{"id":"retention_14d","displayText":"D14"},{"id":"retention_30d","displayText":"D30"}]}]';

const MOCK_OPTIONS = [
    {
        id: 'total_revenue_1d',
        displayText: 'D1'
    },
    {
        id: 'total_revenue_3d',
        displayText: 'D3'
    },
    {
        id: 'total_revenue_7d',
        displayText: 'D7'
    },
    {
        id: 'total_revenue_14d',
        displayText: 'D14'
    },
    {
        id: 'total_revenue_30d',
        displayText: 'D30'
    }
];

const MOCK_TO_STRING_OPTION = {
    id: 123456,
    title: 'Test Option'
};

describe('DropdownService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [DropdownService]
        })
    );

    it('should be created', () => {
        const service: DropdownService = TestBed.inject(DropdownService);
        expect(service).toBeTruthy();
    });

    it('should map grouped options', () => {
        const service: DropdownService = TestBed.inject(DropdownService);
        expect(JSON.stringify(service.mapGroupedOptions(MOCK_GROUP_SUBGROUP_OPTIONS))).toEqual(MOCK_GROUP_SUBGROUP_OPTIONS_PREPARED);
    });

    it('should check id option is selected', () => {
        const service: DropdownService = TestBed.inject(DropdownService);
        expect(service.isOptionInSelected(MOCK_OPTIONS[2], [MOCK_OPTIONS[2]])).toBe(true);
    });

    it('should parse option to string', () => {
        const service: DropdownService = TestBed.inject(DropdownService);
        expect(service.optionToString(MOCK_TO_STRING_OPTION, {id: 'id', title: 'title'})).toEqual(
            `<span class="is-id">123456</span> <span class="is-title">Test Option</span>`
        );
    });
});
