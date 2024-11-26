import {StoryFn, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipFiltersComponent, ChipFiltersModule} from '@ironsource/fusion-ui/components/chip-filters';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {
    MOCK_CAMPAIGNS,
    MOCK_COUNTRIES,
    MOCK_DUMMY_OPTIONS,
    MOCK_STATUS,
    MOCK_USERS
} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';
import {DaterangeModule, DaterangeOptions} from '@ironsource/fusion-ui/components/daterange';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {
    AD_FORMAT_OPTIONS,
    AD_TYPE_OPTIONS,
    CATEGORY_OPTIONS,
    MOCK_CATEGORY_FILTERS,
    PLATFORM_OPTIONS,
    STATUS_OPTIONS
} from '@ironsource/fusion-ui/components/chip-filters/v4/stories/chip-filters-v4.stories.mock';

export default {
    title: 'V3/Components/Filters/Filter Panel',
    component: ChipFiltersComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                ChipFiltersModule,
                ChipFilterModule,
                DropdownModule,
                DaterangeModule,
                DropdownDualMultiSelectModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5335%3A100355&t=v0xb5mVrmDUjW51l-1'
        },
        docs: {
            description: {
                component: dedent`**Filter Panel** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            }
        }
    },
    argTypes: {
        fcChip1: {
            control: false
        },
        fcChip2: {
            control: false
        },
        fcChip3: {
            control: false
        },
        fcChip4: {
            control: false
        }
    }
} as Meta<ChipFiltersComponent>;

// region Default
const templateDefault = `
<div style="height: 350px;">
    <fusion-chip-filters>
        <fusion-chip-filter [configuration]="configChip1">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip1"
                     [placeholder]="placeholderChip1"
                     [formControl]="fcChip1"
                     [options]="optionsChip1"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip2">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip2"
                     [placeholder]="placeholderChip2"
                     [formControl]="fcChip2"
                     [options]="optionsChip2"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip3">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip3"
                     [placeholder]="placeholderChip3"
                     [formControl]="fcChip3"
                     [options]="optionsChip3"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip4">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip4"
                     [placeholder]="placeholderChip4"
                     [formControl]="fcChip4"
                     [options]="optionsChip4"
                     [search]="searchChip4"
                     [optionsTitle]="optionsTitleChip4"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </fusion-chip-filters>
</div>`;

type Story = StoryObj<ChipFiltersComponent>;

export const Default: Story = {
    render: args => ({
        props: {
            fcChip1: new FormControl(),
            configChip1: {id: 1, mode: 'static', close: true},
            optionsChip1: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip1: 'Label 1',
            placeholderChip1: 'All',

            fcChip2: new FormControl(),
            configChip2: {id: 2, mode: 'static', close: true},
            optionsChip2: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip2: 'Label 2',
            placeholderChip2: 'All',

            fcChip3: new FormControl(),
            configChip3: {id: 3, mode: 'static', close: true},
            optionsChip3: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip3: 'Label 3',
            placeholderChip3: 'All',

            fcChip4: new FormControl(),
            configChip4: {id: 4, mode: 'static', close: true},
            optionsChip4: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip4: 'Label 4',
            placeholderChip4: 'All'
        },
        template: templateDefault
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { ChipFilterComponentConfigurations } from "@ironsource/fusion-ui/components/chip-filter/common/base";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-chip-filters>
            <fusion-chip-filter [configuration]="configChip1">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip1"
                         [placeholder]="placeholderChip1"
                         [formControl]="fcChip1"
                         [options]="optionsChip1"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip2">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip2"
                         [placeholder]="placeholderChip2"
                         [formControl]="fcChip2"
                         [options]="optionsChip2"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip3">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip3"
                         [placeholder]="placeholderChip3"
                         [formControl]="fcChip3"
                         [options]="optionsChip3"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip4">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip4"
                         [placeholder]="placeholderChip4"
                         [formControl]="fcChip4"
                         [options]="optionsChip4"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
        </fusion-chip-filters>
    \`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFiltersModule, ChipFilterModule, DropdownModule]
    })
    export class FusionStoryWrapperComponent {
        // region first chip 1
        fcChip1 = new FormControl();
        configChip1: ChipFilterComponentConfigurations = {id: 1, mode: 'static', close: true};
        optionsChip1: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip1 = 'Label 1';
        placeholderChip1 = 'All';
        // endregion
        // region first chip 2
        fcChip2 = new FormControl();
        configChip2: ChipFilterComponentConfigurations = {id: 2, mode: 'static', close: true};
        optionsChip2: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip2 = 'Label 2';
        placeholderChip2 = 'All';
        // endregion
        // region first chip 3
        fcChip3 = new FormControl();
        configChip3: ChipFilterComponentConfigurations = {id: 3, mode: 'static', close: true};
        optionsChip3: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip3 = 'Label 3';
        placeholderChip3 = 'All';
        // endregion
        // region first chip 4
        fcChip4 = new FormControl();
        configChip4: ChipFilterComponentConfigurations = {id: 4, mode: 'static', close: true};
        optionsChip4: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip4 = 'Label 4';
        placeholderChip4 = 'All';
        // endregion

    }

    const DUMMY_OPTIONS = ${JSON.stringify(MOCK_DUMMY_OPTIONS)};
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const OnePreselectedNotClosable: Story = {
    render: args => ({
        props: {
            fcChip1: new FormControl(),
            configChip1: {id: 1, mode: 'static', close: true},
            optionsChip1: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip1: 'Label 1',
            placeholderChip1: 'All',

            fcChip2: new FormControl([MOCK_DUMMY_OPTIONS[3]]),
            configChip2: {id: 2, mode: 'static', close: false},
            optionsChip2: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip2: 'Label 2',
            placeholderChip2: 'All',

            fcChip3: new FormControl(),
            configChip3: {id: 3, mode: 'static', close: true},
            optionsChip3: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip3: 'Label 3',
            placeholderChip3: 'All',

            fcChip4: new FormControl(),
            configChip4: {id: 4, mode: 'static', close: true},
            optionsChip4: MOCK_DUMMY_OPTIONS,
            placeholderPrefixChip4: 'Label 4',
            placeholderChip4: 'All'
        },
        template: templateDefault
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { ChipFilterComponentConfigurations } from "@ironsource/fusion-ui/components/chip-filter/common/base";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-chip-filters>
            <fusion-chip-filter [configuration]="configChip1">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip1"
                         [placeholder]="placeholderChip1"
                         [formControl]="fcChip1"
                         [options]="optionsChip1"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip2">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip2"
                         [placeholder]="placeholderChip2"
                         [formControl]="fcChip2"
                         [options]="optionsChip2"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip3">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip3"
                         [placeholder]="placeholderChip3"
                         [formControl]="fcChip3"
                         [options]="optionsChip3"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip4">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip4"
                         [placeholder]="placeholderChip4"
                         [formControl]="fcChip4"
                         [options]="optionsChip4"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
        </fusion-chip-filters>
    \`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFiltersModule, ChipFilterModule, DropdownModule]
    })
    export class FusionStoryWrapperComponent {
        // region first chip 1
        fcChip1 = new FormControl();
        configChip1: ChipFilterComponentConfigurations = {id: 1, mode: 'static', close: true};
        optionsChip1: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip1 = 'Label 1';
        placeholderChip1 = 'All';
        // endregion
        // region first chip 2
        fcChip2 = new FormControl([DUMMY_OPTIONS[3]]);
        configChip2: ChipFilterComponentConfigurations = {id: 2, mode: 'static', close: false};
        optionsChip2: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip2 = 'Label 2';
        placeholderChip2 = 'All';
        // endregion
        // region first chip 3
        fcChip3 = new FormControl();
        configChip3: ChipFilterComponentConfigurations = {id: 3, mode: 'static', close: true};
        optionsChip3: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip3 = 'Label 3';
        placeholderChip3 = 'All';
        // endregion
        // region first chip 4
        fcChip4 = new FormControl();
        configChip4: ChipFilterComponentConfigurations = {id: 4, mode: 'static', close: true};
        optionsChip4: DropdownOption[] = DUMMY_OPTIONS;
        placeholderPrefixChip4 = 'Label 4';
        placeholderChip4 = 'All';
        // endregion
    }

    const DUMMY_OPTIONS = ${JSON.stringify(MOCK_DUMMY_OPTIONS)};
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
// endregion

// region With Add button
export const WithAddButton: Story = {
    render: args => ({
        props: {
            // region Add Filter Chip props
            addFiltersTitle: 'Add filter by:',
            addFilterOptions: [
                {id: 4, displayText: 'Country'},
                {id: 5, displayText: 'Campaigns'}
            ],
            disableAddFilter: false,
            isSearch: true,
            // endregion

            // region first chip - User
            fcChip1: new FormControl(),
            configChip1: {id: 1, mode: 'static', close: true},
            optionsChip1: MOCK_USERS,
            placeholderPrefixChip1: 'User',
            placeholderChip1: 'All',
            searchChip1: true,
            optionsTitleChip1: 'User',
            // endregion

            // region first chip - Status
            configChip2: {id: 2, mode: 'static', close: true},
            fcChip2: new FormControl(),
            placeholderPrefixChip2: 'Status',
            placeholderChip2: 'All',
            optionsChip2: MOCK_STATUS,
            optionsTitleChip2: 'Status',
            // endregion

            // region first chip - Date Range
            configChip3: {id: 3, mode: 'static', close: true},
            fcChip3: new FormControl(),
            dateRangeOptions: {chipLabel: 'Date range', placeholder: 'All', overlayAlignPosition: 'left'},
            // endregion

            // region first chip - Country (dynamic)
            fcChip4: new FormControl(),
            configChip4: {id: 4, mode: 'dynamic', close: true},
            optionsChip4: MOCK_COUNTRIES,
            placeholderChip4: 'All',
            optionsTitleChip4: 'Country',
            // endregion

            // region first chip - Campaigns (dynamic)
            fcChip5: new FormControl(),
            configChip5: {id: 5, mode: 'dynamic', close: true},
            optionsChip5: MOCK_CAMPAIGNS,
            placeholderChip5: 'All',
            optionsTitleChip5: 'Campaigns'
            // endregion
        },
        template: `
<div style="height: 350px;">
    <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
        >
        <fusion-chip-filter [configuration]="configChip1" testId="test-chip-1" testId="test-chip-users">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip1"
                     [placeholder]="placeholderChip1"
                     [formControl]="fcChip1"
                     [options]="optionsChip1"
                     [search]="searchChip1"
                     [optionsTitle]="optionsTitleChip1"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip2" testId="test-chip-status">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip2"
                     [placeholder]="placeholderChip2"
                     [formControl]="fcChip2"
                     [options]="optionsChip2"
                     [optionsTitle]="optionsTitleChip2"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip3"  testId="test-chip-dates">
            <div class="filter-element">
                <fusion-daterange [options]="dateRangeOptions" [formControl]="fcChip3"> </fusion-daterange>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip4" testId="test-chip-country">
            <div class="filter-element">
                <fusion-dropdown-dual-multi-select
                    testId="test-chip-country"
                    [title]="optionsTitleChip4"
                    [placeholder]="placeholderChip4"
                    [formControl]="fcChip4"
                    [items]="optionsChip4"
                 ></fusion-dropdown-dual-multi-select>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip5" testId="test-chip-campaign">
            <div class="filter-element">
                <fusion-dropdown-dual-multi-select
                    testId="test-chip-campaign"
                    [title]="optionsTitleChip5"
                    [placeholder]="placeholderChip5"
                    [formControl]="fcChip5"
                    [items]="optionsChip5"
                 ></fusion-dropdown-dual-multi-select>
            </div>
        </fusion-chip-filter>
    </fusion-chip-filters>
</div>`
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { ChipFilterComponentConfigurations } from "@ironsource/fusion-ui/components/chip-filter/common/base";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DaterangeModule, DaterangeOptions } from '@ironsource/fusion-ui/components/daterange';
    import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';


    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 350px;">
        <fusion-chip-filters
            [addFiltersTitle]="addFiltersTitle"
            [addFilterOptions]="addFilterOptions"
            [disableAddFilter]="disableAddFilter"
            [isSearch]="isSearch"
            >
            <fusion-chip-filter [configuration]="configChip1">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip1"
                         [placeholder]="placeholderChip1"
                         [formControl]="fcChip1"
                         [options]="optionsChip1"
                         [search]="searchChip1"
                         [optionsTitle]="optionsTitleChip1"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip2">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip2"
                         [placeholder]="placeholderChip2"
                         [formControl]="fcChip2"
                         [options]="optionsChip2"
                         [optionsTitle]="optionsTitleChip2"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip3">
                <div class="filter-element">
                    <fusion-daterange [options]="dateRangeOptions" [formControl]="fcChip3"> </fusion-daterange>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip4">
                <div class="filter-element">
                    <fusion-dropdown-dual-multi-select
                        [title]="optionsTitleChip4"
                        [placeholder]="placeholderChip4"
                        [formControl]="fcChip4"
                        [items]="optionsChip4"
                     ></fusion-dropdown-dual-multi-select>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip5">
                <div class="filter-element">
                    <fusion-dropdown-dual-multi-select
                        [title]="optionsTitleChip5"
                        [placeholder]="placeholderChip5"
                        [formControl]="fcChip5"
                        [items]="optionsChip5"
                     ></fusion-dropdown-dual-multi-select>
                </div>
            </fusion-chip-filter>
        </fusion-chip-filters>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFiltersModule, ChipFilterModule, DropdownModule, DaterangeModule, DropdownDualMultiSelectModule]
    })
    export class FusionStoryWrapperComponent {
        // region Add Filter Chip props
        addFiltersTitle = 'Add filter by:';
        addFilterOptions: DropdownOption[] = [
            {id: 4, displayText: 'Country'},
            {id: 5, displayText: 'Campaigns'}
        ];
        disableAddFilter = false;
        isSearch = true;
        // endregion

        // region first chip - User
        fcChip1 = new FormControl();
        configChip1: ChipFilterComponentConfigurations = {id: 1, mode: 'static', close: true};
        optionsChip1: DropdownOption[] = ${JSON.stringify(MOCK_USERS)};
        placeholderPrefixChip1 = 'User';
        placeholderChip1 = 'All';
        searchChip1 = true;
        optionsTitleChip1 = 'User';
        // endregion

        // region first chip - Status
        configChip2: ChipFilterComponentConfigurations = {id: 2, mode: 'static', close: true};
        fcChip2 = new FormControl();
        placeholderPrefixChip2 = 'Status';
        placeholderChip2 = 'All';
        optionsChip2: DropdownOption[] = ${JSON.stringify(MOCK_STATUS)};
        optionsTitleChip2 = 'Status';
        // endregion

        // region first chip - Date Range
        configChip3: ChipFilterComponentConfigurations = {id: 3, mode: 'static', close: true};
        fcChip3 = new FormControl();
        dateRangeOptions: DaterangeOptions = {chipLabel: 'Date range', placeholder: 'All', overlayAlignPosition: 'left'};
        // endregion

        // region first chip - Country (dynamic)
        configChip4: ChipFilterComponentConfigurations = {id: 4, mode: 'static', close: true};
        optionsChip4: DropdownOption[] = ${JSON.stringify(MOCK_COUNTRIES)};
        fcChip4 = new FormControl();
        placeholderChip4 = 'All';
        optionsTitleChip4 = 'Country';
        // endregion

        // region first chip - Campaigns (dynamic)
        fcChip5 = new FormControl();
        configChip5:ChipFilterComponentConfigurations = {id: 5, mode: 'static', close: true};
        optionsChip5: DropdownOption[] = ${JSON.stringify(MOCK_CAMPAIGNS)};
        placeholderChip5 = 'All';
        optionsTitleChip5 = 'Campaigns';
        // endregion
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
// endregion

// region Add Button
export const AddButton: Story = {
    render: args => ({
        props: {
            // region Add Filter Chip props
            addFiltersTitle: 'Add filter by:',
            addFilterOptions: [
                {id: 4, displayText: 'Country'},
                {id: 5, displayText: 'Campaigns'}
            ],
            disableAddFilter: false,
            isSearch: true
            // endregion
        },
        template: `<div style="height: 350px;">
    <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
        >
    </fusion-chip-filters>`
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { ChipFilterComponentConfigurations } from "@ironsource/fusion-ui/components/chip-filter/common/base";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-chip-filters
            [addFiltersTitle]="addFiltersTitle"
            [addFilterOptions]="addFilterOptions"
            [disableAddFilter]="disableAddFilter"
            [isSearch]="isSearch"
            >
        </fusion-chip-filters>
    \`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFiltersModule, ChipFilterModule, DropdownModule]
    })
    export class FusionStoryWrapperComponent {
        // region Add Filter Chip props
        addFiltersTitle= 'Add filter by:';
        addFilterOptions= [
            {id: 1, displayText: 'Country'},
            {id: 2, displayText: 'Campaigns'}
        ];
        disableAddFilter= false;
        isSearch= true;
        // endregion
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const AddButtonDisabled: Story = {
    render: args => ({
        props: {
            // region Add Filter Chip props
            addFiltersTitle: 'Add filter by:',
            addFilterOptions: [
                {id: 4, displayText: 'Country'},
                {id: 5, displayText: 'Campaigns'}
            ],
            disableAddFilter: true
            // endregion
        },
        template: `<div style="height: 350px;">
    <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
        >
    </fusion-chip-filters>`
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { ChipFilterComponentConfigurations } from "@ironsource/fusion-ui/components/chip-filter/common/base";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-chip-filters
            [addFiltersTitle]="addFiltersTitle"
            [addFilterOptions]="addFilterOptions"
            [disableAddFilter]="disableAddFilter"
            [isSearch]="isSearch"
            >
        </fusion-chip-filters>
    \`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFiltersModule, ChipFilterModule, DropdownModule]
    })
    export class FusionStoryWrapperComponent {
        // region Add Filter Chip props
        addFiltersTitle= 'Add filter by:';
        addFilterOptions= [
            {id: 1, displayText: 'Country'},
            {id: 2, displayText: 'Campaigns'}
        ];
        disableAddFilter= true;
        isSearch= true;
        // endregion
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
// endregion

// region NoAddButton
export const NoAddButton: Story = {
    render: args => ({
        props: {
            // region first chip - User
            fcChip1: new FormControl(),
            configChip1: {id: 1, mode: 'static', close: true},
            optionsChip1: MOCK_USERS,
            placeholderPrefixChip1: 'User',
            placeholderChip1: 'All',
            searchChip1: true,
            optionsTitleChip1: 'User',
            // endregion

            // region first chip - Status
            configChip2: {id: 2, mode: 'static', close: true},
            fcChip2: new FormControl(),
            placeholderPrefixChip2: 'Status',
            placeholderChip2: 'All',
            optionsChip2: MOCK_STATUS,
            optionsTitleChip2: 'Status',
            // endregion

            // region first chip - Date Range
            configChip3: {id: 3, mode: 'static', close: true},
            fcChip3: new FormControl(),
            dateRangeOptions: {chipLabel: 'Date range', placeholder: 'All', overlayAlignPosition: 'left'} as DaterangeOptions,
            // endregion

            // region first chip - Country (dynamic)
            fcChip4: new FormControl([MOCK_COUNTRIES[4]]),
            configChip4: {id: 4, mode: 'static', close: true},
            optionsChip4: MOCK_COUNTRIES,
            placeholderChip4: 'All',
            optionsTitleChip4: 'Country',
            // endregion

            // region first chip - Campaigns (dynamic)
            fcChip5: new FormControl(),
            configChip5: {id: 5, mode: 'static', close: true},
            optionsChip5: MOCK_CAMPAIGNS,
            placeholderChip5: 'All',
            optionsTitleChip5: 'Campaigns'
            // endregion
        },
        template: `
<div style="height: 350px;">
    <fusion-chip-filters>
        <fusion-chip-filter [configuration]="configChip1">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip1"
                     [placeholder]="placeholderChip1"
                     [formControl]="fcChip1"
                     [options]="optionsChip1"
                     [search]="searchChip1"
                     [optionsTitle]="optionsTitleChip1"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip2">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefixChip2"
                     [placeholder]="placeholderChip2"
                     [formControl]="fcChip2"
                     [options]="optionsChip2"
                     [optionsTitle]="optionsTitleChip2"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip3">
            <div class="filter-element">
                <fusion-daterange [options]="dateRangeOptions" [formControl]="fcChip3"> </fusion-daterange>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip4">
            <div class="filter-element">
                <fusion-dropdown-dual-multi-select
                    [title]="optionsTitleChip4"
                    [placeholder]="placeholderChip4"
                    [formControl]="fcChip4"
                    [items]="optionsChip4"
                 ></fusion-dropdown-dual-multi-select>
            </div>
        </fusion-chip-filter>
        <fusion-chip-filter [configuration]="configChip5">
            <div class="filter-element">
                <fusion-dropdown-dual-multi-select
                    [title]="optionsTitleChip5"
                    [placeholder]="placeholderChip5"
                    [formControl]="fcChip5"
                    [items]="optionsChip5"
                 ></fusion-dropdown-dual-multi-select>
            </div>
        </fusion-chip-filter>
    </fusion-chip-filters>
</div>`
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { ChipFilterComponentConfigurations } from "@ironsource/fusion-ui/components/chip-filter/common/base";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DaterangeModule, DaterangeOptions } from '@ironsource/fusion-ui/components/daterange';
    import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';


    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 350px;">
        <fusion-chip-filters>
            <fusion-chip-filter [configuration]="configChip1">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip1"
                         [placeholder]="placeholderChip1"
                         [formControl]="fcChip1"
                         [options]="optionsChip1"
                         [search]="searchChip1"
                         [optionsTitle]="optionsTitleChip1"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip2">
                <div class="filter-element">
                    <fusion-dropdown
                         [placeholderPrefix]="placeholderPrefixChip2"
                         [placeholder]="placeholderChip2"
                         [formControl]="fcChip2"
                         [options]="optionsChip2"
                         [optionsTitle]="optionsTitleChip2"
                         >
                    </fusion-dropdown>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip3">
                <div class="filter-element">
                    <fusion-daterange [options]="dateRangeOptions" [formControl]="fcChip3"> </fusion-daterange>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip4">
                <div class="filter-element">
                    <fusion-dropdown-dual-multi-select
                        [title]="optionsTitleChip4"
                        [placeholder]="placeholderChip4"
                        [formControl]="fcChip4"
                        [items]="optionsChip4"
                     ></fusion-dropdown-dual-multi-select>
                </div>
            </fusion-chip-filter>
            <fusion-chip-filter [configuration]="configChip5">
                <div class="filter-element">
                    <fusion-dropdown-dual-multi-select
                        [title]="optionsTitleChip5"
                        [placeholder]="placeholderChip5"
                        [formControl]="fcChip5"
                        [items]="optionsChip5"
                     ></fusion-dropdown-dual-multi-select>
                </div>
            </fusion-chip-filter>
        </fusion-chip-filters>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFiltersModule, ChipFilterModule, DropdownModule, DaterangeModule, DropdownDualMultiSelectModule]
    })
    export class FusionStoryWrapperComponent {
        // region first chip - User
        fcChip1 = new FormControl();
        configChip1: ChipFilterComponentConfigurations = {id: 1, mode: 'static', close: true};
        optionsChip1: DropdownOption[] = ${JSON.stringify(MOCK_USERS)};
        placeholderPrefixChip1 = 'User';
        placeholderChip1 = 'All';
        searchChip1 = true;
        optionsTitleChip1 = 'User';
        // endregion

        // region first chip - Status
        configChip2: ChipFilterComponentConfigurations = {id: 2, mode: 'static', close: true};
        fcChip2 = new FormControl();
        placeholderPrefixChip2 = 'Status';
        placeholderChip2 = 'All';
        optionsChip2: DropdownOption[] = ${JSON.stringify(MOCK_STATUS)};
        optionsTitleChip2 = 'Status';
        // endregion

        // region first chip - Date Range
        configChip3: ChipFilterComponentConfigurations = {id: 3, mode: 'static', close: true};
        fcChip3 = new FormControl();
        dateRangeOptions: DaterangeOptions = {chipLabel: 'Date range', placeholder: 'All', overlayAlignPosition: 'left'};
        // endregion

        // region first chip - Country (dynamic)
        configChip4: ChipFilterComponentConfigurations = {id: 4, mode: 'static', close: true};
        optionsChip4: DropdownOption[] = ${JSON.stringify(MOCK_COUNTRIES)};
        fcChip4 = new FormControl([this.optionsChip4[4]]);
        placeholderChip4 = 'All';
        optionsTitleChip4 = 'Country';
        // endregion

        // region first chip - Campaigns (dynamic)
        fcChip5 = new FormControl();
        configChip5:ChipFilterComponentConfigurations = {id: 5, mode: 'static', close: true};
        optionsChip5: DropdownOption[] = ${JSON.stringify(MOCK_CAMPAIGNS)};
        placeholderChip5 = 'All';
        optionsTitleChip5 = 'Campaigns';
        // endregion
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
// endregion
