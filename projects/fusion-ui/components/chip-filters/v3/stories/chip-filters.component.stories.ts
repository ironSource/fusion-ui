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
import {MOCK_COUNTRIES, MOCK_STATUS, MOCK_USERS} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';

export default {
    title: 'Components/Chip-Filters/Filter Panel',
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
                component: dedent`**Filter Panel**`
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

const ChipFilterTemplate: Story<ChipFiltersComponent> = (args: ChipFiltersComponent) => ({
    props: {...args},
    template: `
<div style="height: 250px;">
    <fusion-chip-filters [addFiltersTitle]="addFiltersTitle" [addFilterOptions]="optionsChipsToAdd">
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
    </fusion-chip-filters>
</div>`
});

// region Default
export const Default = ChipFilterTemplate.bind({});
Default.args = {
    addFiltersTitle: 'Filters to add',
    optionsChipsToAdd: [{id: 5, displayText: 'Application'}],

    fcChip1: new FormControl(),
    configChip1: {id: 1, mode: 'static', close: true},
    optionsChip1: MOCK_USERS,
    placeholderPrefixChip1: 'User',
    placeholderChip1: 'All',
    searchChip1: true,
    optionsTitleChip1: 'User',

    configChip2: {id: 2, mode: 'static', close: true},
    fcChip2: new FormControl(),
    placeholderPrefixChip2: 'Status',
    placeholderChip2: 'All',
    optionsChip2: MOCK_STATUS,
    optionsTitleChip2: 'Status',

    configChip3: {id: 3, mode: 'static', close: true},
    fcChip3: new FormControl(),
    dateRangeOptions: {chipLabel: 'Date range', placeholder: 'All'},

    fcChip4: new FormControl(),
    configChip4: {id: 4, mode: 'static', close: true},
    optionsChip4: MOCK_COUNTRIES,
    placeholderChip4: 'All',
    optionsTitleChip4: 'Country'
};
