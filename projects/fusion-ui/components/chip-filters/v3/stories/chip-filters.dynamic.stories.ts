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
import {
    MOCK_CAMPAIGNS,
    MOCK_COUNTRIES,
    MOCK_STATUS,
    MOCK_USERS
} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';

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
        [addFilterOptions]="addFilterOptions"
        [showAddFilter]="true"
        (onDynamicChipSelect)="onDynamicChipSelect($event)"
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
export const Default = FilterPanelDefaultTemplate.bind({});
Default.args = {
    addFiltersTitle: 'Add filter by:',
    addFilterOptions: [
        {id: 4, displayText: 'Country'},
        {id: 5, displayText: 'Campaigns'}
    ],

    fcChip1: new FormControl(),
    configChip1: {id: 1, mode: 'static', close: true} as ChipFilterComponentConfigurations,
    optionsChip1: MOCK_USERS,
    placeholderPrefixChip1: 'User',
    placeholderChip1: 'All',
    searchChip1: true,
    optionsTitleChip1: 'User',

    selectedDynamicFilters: [],
    dynamicFiltersAll: [
        {
            fcChip: new FormControl(),
            configChip: {id: 4, mode: 'dynamic', close: true},
            optionsChip: MOCK_COUNTRIES,
            placeholderChip: 'All',
            optionsTitleChip: 'Country'
        },
        {
            fcChip: new FormControl(),
            configChip: {id: 5, mode: 'dynamic', close: true},
            optionsChip: MOCK_CAMPAIGNS,
            placeholderChip: 'All',
            optionsTitleChip: 'Campaigns'
        }
    ]
};
// endregion
