import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {MultiDropdownComponent} from '@ironsource/fusion-ui/components/multi-dropdown/v4';
import {ChipFilterButtonComponent, ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter/v4';
import {ChipFiltersV4Component} from '../chip-filters-v4.component';
import {
    AD_FORMAT_OPTIONS,
    AD_TYPE_OPTIONS,
    CATEGORY_OPTIONS,
    DATERANGE_OPTIONS,
    PLATFORM_OPTIONS,
    STATUS_OPTIONS
} from './chip-filters-v4.stories.mock';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {CountryCode} from '@ironsource/fusion-ui/components/flag/v4';
import {MOCK_OPTIONS_COUNTRIES, TOP_COUNTRIES} from '@ironsource/fusion-ui/storybook-foundations/mocking/countrues-mock';

const groupedCountriesOptions: DropdownOption[] = ((allCountries: any[]): DropdownOption[] => {
    const groupedCountries = [
        {
            id: 'topCountries',
            displayText: 'Top Countries',
            isGroup: true,
            childOptions: []
        },
        {
            id: 'restCountries',
            displayText: 'Rest of the world',
            isGroup: true,
            childOptions: []
        }
    ];
    allCountries.forEach(country => {
        country.flag = country.flag.toLowerCase() as CountryCode;
        groupedCountries[TOP_COUNTRIES.includes(country.id) ? 0 : 1].childOptions.push(country);
    });
    return groupedCountries;
})(MOCK_OPTIONS_COUNTRIES);

const basicTemplate = `
<fusion-chip-filters>
        <fusion-chip-filter [configuration]="configChip1">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip1"
                    [placeholder]="placeholderChip1"
                    [formControl]="fcChip1"
                    [options]="optionsChip1"
                    selectAllLabel="Select all"
                    [search]="true"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip2">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip2"
                    [placeholder]="placeholderChip2"
                    [formControl]="fcChip2"
                    [options]="optionsChip2"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip3">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip3"
                    [placeholder]="placeholderChip3"
                    [formControl]="fcChip3"
                    [options]="optionsChip3"
                    [search]="[search]"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip4">
            <div class="filter-element">
               <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip4"
                    [placeholder]="placeholderChip4"
                    [formControl]="fcChip4"
                    [options]="optionsChip4"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip5">
            <div class="filter-element">
                <fusion-dropdown
                    [placeholderPrefix]="placeholderPrefixChip5"
                    [placeholder]="placeholderChip5"
                    [formControl]="fcChip5"
                    [options]="optionsChip5">
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip6">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip6"
                    [placeholder]="placeholderChip6"
                    [formControl]="fcChip6"
                    [optionsGroups]="optionsChip6"
                    selectAllLabel="Select all"
                    [search]="true"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>                        
    </fusion-chip-filters>
`;
const datePickerTemplate = `
<fusion-chip-filters>
        <fusion-chip-filter-button [configuration]="configChip1">
            <div class="filter-element">
                 <fusion-dropdown
                    [placeholderPrefix]="placeholderPrefixChip1"
                    [placeholder]="placeholderChip1"
                    [formControl]="fcChip1"
                    [options]="optionsChip1">
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>
        <fusion-chip-filter [configuration]="configChip2">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip2"
                    [placeholder]="placeholderChip2"
                    [formControl]="fcChip2"
                    [options]="optionsChip2"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip3">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip3"
                    [placeholder]="placeholderChip3"
                    [formControl]="fcChip3"
                    [options]="optionsChip3"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip4">
            <div class="filter-element">
               <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip4"
                    [placeholder]="placeholderChip4"
                    [formControl]="fcChip4"
                    [options]="optionsChip4"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
    </fusion-chip-filters>
`;
const addFilterTemplate = `
<fusion-chip-filters
        [addFilterOptions]="addFilterOptions"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
        >
        <fusion-chip-filter [configuration]="configChip1">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip1"
                    [placeholder]="placeholderChip1"
                    [formControl]="fcChip1"
                    [options]="optionsChip1"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip2">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip2"
                    [placeholder]="placeholderChip2"
                    [formControl]="fcChip2"
                    [options]="optionsChip2"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip3">
            <div class="filter-element">
                <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip3"
                    [placeholder]="placeholderChip3"
                    [formControl]="fcChip3"
                    [options]="optionsChip3"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip4">
            <div class="filter-element">
               <fusion-multi-dropdown
                    [placeholderPrefix]="placeholderPrefixChip4"
                    [placeholder]="placeholderChip4"
                    [formControl]="fcChip4"
                    [options]="optionsChip4"
                    selectAllLabel="Select all"
                ></fusion-multi-dropdown>
            </div>
        </fusion-chip-filter>        
    </fusion-chip-filters>
`;

export default {
    title: 'V4/Components/FilterPanel',
    component: ChipFiltersV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                ChipFilterComponent,
                ChipFilterButtonComponent,
                DropdownComponent,
                MultiDropdownComponent
            ]
        }),
        componentWrapperDecorator(story => `<div style="display: block; height: 350px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**Filter Panel** v4`
            }
        }
    }
} as Meta<ChipFiltersV4Component>;

type Story = StoryObj<ChipFiltersV4Component>;

export const Default: Story = {
    render: args => ({
        props: {
            ...args,
            fcChip1: new FormControl(),
            configChip1: {id: 1, mode: 'static', close: true},
            optionsChip1: STATUS_OPTIONS,
            placeholderPrefixChip1: 'Status',
            placeholderChip1: '',

            fcChip2: new FormControl(),
            configChip2: {id: 2, mode: 'static', close: true},
            optionsChip2: PLATFORM_OPTIONS,
            placeholderPrefixChip2: 'Platform',
            placeholderChip2: '',

            fcChip3: new FormControl(),
            configChip3: {id: 3, mode: 'static', close: true},
            optionsChip3: AD_FORMAT_OPTIONS,
            placeholderPrefixChip3: 'Ad format',
            placeholderChip3: '',

            fcChip4: new FormControl(),
            configChip4: {id: 4, mode: 'static', close: true},
            optionsChip4: AD_TYPE_OPTIONS,
            placeholderPrefixChip4: 'Ad type',
            placeholderChip4: '',

            fcChip5: new FormControl(),
            configChip5: {id: 5, mode: 'static', close: true},
            optionsChip5: CATEGORY_OPTIONS,
            placeholderPrefixChip5: 'Category',
            placeholderChip5: '',

            fcChip6: new FormControl(),
            configChip6: {id: 5, mode: 'static', close: true},
            optionsChip6: groupedCountriesOptions,
            placeholderPrefixChip6: 'Country',
            placeholderChip6: ''
        },
        template: basicTemplate
    })
};

export const WithDatePicker: Story = {
    render: args => ({
        props: {
            ...args,
            fcChip1: new FormControl([DATERANGE_OPTIONS[1]]),
            configChip1: {id: 1, mode: 'static', leftIcon: {icon: 'ph/calendar-blank'}, close: false},
            optionsChip1: DATERANGE_OPTIONS,
            placeholderPrefixChip1: '',
            placeholderChip1: '',

            fcChip2: new FormControl(),
            configChip2: {id: 2, mode: 'static', close: true},
            optionsChip2: PLATFORM_OPTIONS,
            placeholderPrefixChip2: 'Platform',
            placeholderChip2: '',

            fcChip3: new FormControl(),
            configChip3: {id: 3, mode: 'static', close: true},
            optionsChip3: AD_FORMAT_OPTIONS,
            placeholderPrefixChip3: 'Ad format',
            placeholderChip3: '',

            fcChip4: new FormControl(),
            configChip4: {id: 4, mode: 'static', close: true},
            optionsChip4: AD_TYPE_OPTIONS,
            placeholderPrefixChip4: 'Ad type',
            placeholderChip4: ''
        },
        template: datePickerTemplate
    })
};

export const WithAddFilters: Story = {
    render: args => ({
        props: {
            ...args,
            addFilterOptions: [
                {id: 3, displayText: 'Ad format'},
                {id: 4, displayText: 'Ad type'}
            ],
            disableAddFilter: false,
            isSearch: false,

            fcChip1: new FormControl(),
            configChip1: {id: 1, mode: 'static', close: true},
            optionsChip1: STATUS_OPTIONS,
            placeholderPrefixChip1: 'Status',
            placeholderChip1: '',

            fcChip2: new FormControl(),
            configChip2: {id: 2, mode: 'static', close: true},
            optionsChip2: PLATFORM_OPTIONS,
            placeholderPrefixChip2: 'Platform',
            placeholderChip2: '',

            fcChip3: new FormControl(),
            configChip3: {id: 3, mode: 'dynamic', close: true},
            optionsChip3: AD_FORMAT_OPTIONS,
            placeholderPrefixChip3: 'Ad format',
            placeholderChip3: '',

            fcChip4: new FormControl(),
            configChip4: {id: 4, mode: 'dynamic', close: true},
            optionsChip4: AD_TYPE_OPTIONS,
            placeholderPrefixChip4: 'Ad type',
            placeholderChip4: ''
        },
        template: addFilterTemplate
    })
};

// region Add filter button alone
/*export const AddFilterButton: Story = {
    render: args => ({
        props: {
            ...args,
            addFiltersTitle: 'Add filter by:',
            addFilterOptions: [
                {id: 4, displayText: 'Country'},
                {id: 5, displayText: 'Campaigns'}
            ],
            disableAddFilter: false,
            isSearch: true
        },
        template: `<fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
        >
    </fusion-chip-filters>`
    })
};

export const AddFilterButtonDisabled: Story = {
    render: args => ({
        props: {
            ...args,
            addFiltersTitle: 'Add filter by:',
            addFilterOptions: [
                {id: 4, displayText: 'Country'},
                {id: 5, displayText: 'Campaigns'}
            ],
            disableAddFilter: true,
            isSearch: true
        },
        template: `<fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
        >
    </fusion-chip-filters>`
    })
};*/
// endregion
