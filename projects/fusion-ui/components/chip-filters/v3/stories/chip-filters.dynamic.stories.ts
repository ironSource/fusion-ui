import {Story, Meta} from '@storybook/angular';
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
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {DynamicFilter, DynamicFilterType} from '@ironsource/fusion-ui/components/chip-filters/common/base';
import {MOCK_COUNTRIES, MOCK_STATUS, MOCK_USERS} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';

export default {
    title: 'Components/Filters/Filter Panel Dynamic',
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
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5335%3A100355&t=v0xb5mVrmDUjW51l-1'
        },
        docs: {
            description: {
                component: dedent`**Filter Panel Dynamic** Dynamic filters generation`
            }
        }
    }
} as Meta<ChipFiltersComponent>;

// region Default
const FilterPanelDefaultTemplate: Story<ChipFiltersComponent> = (args: ChipFiltersComponent) => ({
    props: {...args},
    template: `
<div style="height: 350px;">
    <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [dynamicFilters]="dynamicFilters"
        [disableAddFilter]="disableAddFilter"
        [isSearch]="isSearch"
    >
    </fusion-chip-filters>
</div>`
});
export const Default = FilterPanelDefaultTemplate.bind({});
Default.args = {
    addFiltersTitle: 'Add filter by:',
    dynamicFilters: [
        {
            id: 1,
            title: 'User',
            filterType: DynamicFilterType.Dropdown,
            formControl: new FormControl(),
            dropdownConfiguration: {
                options: MOCK_USERS,
                optionsTitle: 'Select User',
                placeholder: 'All'
            }
        },
        {
            id: 2,
            title: 'Countries',
            filterType: DynamicFilterType.IncludeExclude,
            formControl: new FormControl(),
            includeExcludeConfiguration: {
                items: MOCK_COUNTRIES,
                placeholder: 'All'
            }
        },
        {
            id: 3,
            title: 'Date Range',
            filterType: DynamicFilterType.DateRange,
            formControl: new FormControl(),
            daterangeConfiguration: {
                options: {chipLabel: 'Date range', placeholder: 'All', overlayAlignPosition: 'left'}
            }
        }
    ] as DynamicFilter[],
    disableAddFilter: false,
    isSearch: false
};
// endregion

// region StaticAndDynamic
const FilterPaneStaticDynamicDefaultTemplate: Story<ChipFiltersComponent> = (args: ChipFiltersComponent) => ({
    props: {...args},
    template: `
<div style="height: 350px;">
    <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [dynamicFilters]="dynamicFilters"
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
    </fusion-chip-filters>
</div>`
});
export const StaticAndDynamic = FilterPaneStaticDynamicDefaultTemplate.bind({});
StaticAndDynamic.args = {
    addFiltersTitle: 'Add filter by:',
    dynamicFilters: [
        {
            id: 1,
            title: 'User',
            filterType: DynamicFilterType.Dropdown,
            formControl: new FormControl(),
            dropdownConfiguration: {
                options: MOCK_USERS,
                optionsTitle: 'Select User',
                placeholder: 'All'
            }
        },
        {
            id: 2,
            title: 'Countries',
            filterType: DynamicFilterType.IncludeExclude,
            formControl: new FormControl(),
            includeExcludeConfiguration: {
                items: MOCK_COUNTRIES,
                placeholder: 'All'
            }
        },
        {
            id: 3,
            title: 'Date Range',
            filterType: DynamicFilterType.DateRange,
            formControl: new FormControl(),
            daterangeConfiguration: {
                options: {chipLabel: 'Date range', placeholder: 'All', overlayAlignPosition: 'left'}
            }
        }
    ] as DynamicFilter[],
    disableAddFilter: false,
    isSearch: false,

    // region first chip - User
    configChip1: {id: 0, mode: 'static', close: true},
    fcChip1: new FormControl(),
    placeholderPrefixChip1: 'Status',
    placeholderChip1: 'All',
    optionsChip1: MOCK_STATUS,
    optionsTitleChip1: 'Status'
    // endregion
};
// endregion
