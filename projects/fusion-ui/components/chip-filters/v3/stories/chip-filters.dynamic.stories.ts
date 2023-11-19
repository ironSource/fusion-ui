import {StoryFn, Meta} from '@storybook/angular';
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
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {
    MOCK_CAMPAIGNS,
    MOCK_COUNTRIES,
    MOCK_DYNAMIC_FILTERS,
    MOCK_DYNAMIC_PRESELECT_FILTERS,
    MOCK_USERS
} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';

export default {
    title: 'V3/Components/Filters/Filter Panel Dynamic',
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
                component: dedent`**Filter Panel Dynamic** Dynamic filters generation ***SEE EXAMPLE ON STACKBLITZ***`
            }
        }
    }
} as Meta<ChipFiltersComponent>;

const FilterPanelDefaultTemplate: StoryFn<ChipFiltersComponent> = (args: ChipFiltersComponent) => ({
    props: {...args},
    template: `
<div style="height: 350px;">
    <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
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

        <ng-container *ngFor="let chip of selectedDynamicFilters">
            <fusion-chip-filter [configuration]="chip.configChip" (onChipRemove)="onDynamicChipRemove($event)">
                <div class="filter-element">
                    <fusion-dropdown-dual-multi-select
                        [title]="chip.optionsTitleChip"
                        [placeholder]="chip.placeholderChip"
                        [formControl]="chip.fcChip"
                        [items]="chip.optionsChip"
                    ></fusion-dropdown-dual-multi-select>
                </div>
            </fusion-chip-filter>
        </ng-container>
    </fusion-chip-filters>
</div>`
});

export const Default = {
    render: FilterPanelDefaultTemplate,

    args: {
        addFiltersTitle: 'Add filter by:',
        addFilterOptions: [
            {id: 2, displayText: 'Country'},
            {id: 3, displayText: 'Campaigns'}
        ],

        fcChip1: new FormControl(),
        configChip1: {id: 1, mode: 'static', close: true} as ChipFilterComponentConfigurations,
        optionsChip1: MOCK_USERS,
        placeholderPrefixChip1: 'User',
        placeholderChip1: 'All',
        searchChip1: true,
        optionsTitleChip1: 'User',

        selectedDynamicFilters: MOCK_DYNAMIC_FILTERS.filter(filter => filter.fcChip.value)
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
    import { ChipFilterComponentConfigurations, ChipFilterMode } from '@ironsource/fusion-ui/components/chip-filter/common/base';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from '@ironsource/fusion-ui/components/dropdown';
    import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';

    @Component({
        selector: 'fusion-story-wrapper',
        template: \`<div style="height: 350px;">
        <fusion-chip-filters
            [addFiltersTitle]="addFiltersTitle"
            [addFilterOptions]="addFilterOptions"
            [disableAddFilter]="disableAddFilter"
            [isSearch]="isSearch"
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

            <ng-container *ngFor="let chip of selectedDynamicFilters">
                <fusion-chip-filter [configuration]="chip.configChip" (onChipRemove)="onDynamicChipRemove($event)">
                    <div class="filter-element">
                        <fusion-dropdown-dual-multi-select
                            [title]="chip.optionsTitleChip"
                            [placeholder]="chip.placeholderChip"
                            [formControl]="chip.fcChip"
                            [items]="chip.optionsChip"
                        ></fusion-dropdown-dual-multi-select>
                    </div>
                </fusion-chip-filter>
            </ng-container>

        </fusion-chip-filters>
    </div>\`,
        standalone: true,
        imports: [
            CommonModule,
            ReactiveFormsModule,
            ChipFiltersModule,
            ChipFilterModule,
            DropdownModule,
            DropdownDualMultiSelectModule
        ]
    })
    export class FusionStoryWrapperComponent {
        // Add Filter Chip props

        // first chip - User
        fcChip1 = new FormControl();
        configChip1: ChipFilterComponentConfigurations = {id: 1,mode: 'static',close: true};
        optionsChip1 = OPTIONS_USERS;
        placeholderPrefixChip1 = 'User';
        placeholderChip1 = 'All';
        searchChip1 = true;
        optionsTitleChip1 = 'User';

        // Dynamic filters
        dynamicFiltersAll = [
            {
                fcChip: new FormControl(),
                configChip: { id: 2, mode: 'dynamic' as ChipFilterMode, close: true },
                optionsChip: OPTIONS_COUNTRIES,
                placeholderChip: 'All',
                optionsTitleChip: 'Country',
            },
            {
                fcChip: new FormControl(),
                configChip: { id: 3, mode: 'dynamic' as ChipFilterMode, close: true },
                optionsChip: OPTIONS_CAMPAIGNS,
                placeholderChip: 'All',
                optionsTitleChip: 'Campaigns',
            }
        ];

        // Fitlers panel
        addFiltersTitle = 'Add filter by:';
        addFilterOptions: DropdownOption[] = this.dynamicFiltersAll.map(filterDynamic=>({id: filterDynamic.configChip.id, displayText: filterDynamic.optionsTitleChip}));
        disableAddFilter = false;
        isSearch = true;


        selectedDynamicFilters = [];

        onDynamicChipSelect(selected) {
             if (!this.selectedDynamicFilters.some(item => selected.id === item.configChip.id)) {
                this.selectedDynamicFilters = [
                    ...this.selectedDynamicFilters,
                    ...this.dynamicFiltersAll.filter((chipFilter) => (chipFilter.configChip.id === selected.id))
                ];
             }
        }

        onDynamicChipRemove(chipIdToRemove) {
            this.selectedDynamicFilters = [...this.selectedDynamicFilters.filter((chip) => (chip.configChip.id !== chipIdToRemove))];
            this.addFilterOptions = this.dynamicFiltersAll
              .filter((filter) => (!this.selectedDynamicFilters.some((item) => item.configChip.id === filter.configChip.id)))
              .map((filterDynamic) => ({
                id: filterDynamic.configChip.id,
                displayText: filterDynamic.optionsTitleChip,
              }));
        }
    }
    const OPTIONS_USERS: DropdownOption[] = ${JSON.stringify(MOCK_USERS)};
    const OPTIONS_COUNTRIES: DropdownOption[] = ${JSON.stringify(MOCK_COUNTRIES)};
    const OPTIONS_CAMPAIGNS: DropdownOption[] = ${JSON.stringify(MOCK_CAMPAIGNS)};
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithDynamicPreselected = {
    render: FilterPanelDefaultTemplate,

    args: {
        addFiltersTitle: 'Add filter by:',
        addFilterOptions: [
            {id: 2, displayText: 'Country'},
            {id: 3, displayText: 'Campaigns'}
        ],

        fcChip1: new FormControl(),
        configChip1: {id: 1, mode: 'static', close: true} as ChipFilterComponentConfigurations,
        optionsChip1: MOCK_USERS,
        placeholderPrefixChip1: 'User',
        placeholderChip1: 'All',
        searchChip1: true,
        optionsTitleChip1: 'User',

        selectedDynamicFilters: MOCK_DYNAMIC_PRESELECT_FILTERS.filter(filter => filter.fcChip.value)
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
    import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
    import { ChipFilterComponentConfigurations, ChipFilterMode } from '@ironsource/fusion-ui/components/chip-filter/common/base';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
    import { DropdownModule } from '@ironsource/fusion-ui/components/dropdown';
    import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';

    @Component({
        selector: 'fusion-story-wrapper',
        template: \`<div style="height: 350px;">
        <fusion-chip-filters
            [addFiltersTitle]="addFiltersTitle"
            [addFilterOptions]="addFilterOptions"
            [disableAddFilter]="disableAddFilter"
            [isSearch]="isSearch"
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

            <ng-container *ngFor="let chip of selectedDynamicFilters">
                <fusion-chip-filter [configuration]="chip.configChip" (onChipRemove)="onDynamicChipRemove($event)">
                    <div class="filter-element">
                        <fusion-dropdown-dual-multi-select
                            [title]="chip.optionsTitleChip"
                            [placeholder]="chip.placeholderChip"
                            [formControl]="chip.fcChip"
                            [items]="chip.optionsChip"
                        ></fusion-dropdown-dual-multi-select>
                    </div>
                </fusion-chip-filter>
            </ng-container>

        </fusion-chip-filters>
    </div>\`,
        standalone: true,
        imports: [
            CommonModule,
            ReactiveFormsModule,
            ChipFiltersModule,
            ChipFilterModule,
            DropdownModule,
            DropdownDualMultiSelectModule
        ]
    })
    export class FusionStoryWrapperComponent {
        // Add Filter Chip props

        // first chip - User
        fcChip1 = new FormControl();
        configChip1: ChipFilterComponentConfigurations = {id: 1,mode: 'static',close: true};
        optionsChip1 = OPTIONS_USERS;
        placeholderPrefixChip1 = 'User';
        placeholderChip1 = 'All';
        searchChip1 = true;
        optionsTitleChip1 = 'User';

        // Dynamic filters
        dynamicFiltersAll = [
            {
                fcChip: new FormControl(OPTIONS_COUNTRIES.slice(2,5)),
                configChip: { id: 2, mode: 'dynamic' as ChipFilterMode, close: true },
                optionsChip: OPTIONS_COUNTRIES,
                placeholderChip: 'All',
                optionsTitleChip: 'Country',
            },
            {
                fcChip: new FormControl(),
                configChip: { id: 3, mode: 'dynamic' as ChipFilterMode, close: true },
                optionsChip: OPTIONS_CAMPAIGNS,
                placeholderChip: 'All',
                optionsTitleChip: 'Campaigns',
            }
        ];

        // Fitlers panel
        addFiltersTitle = 'Add filter by:';
        addFilterOptions: DropdownOption[] = this.dynamicFiltersAll
            .filter(filter=>(!filter.fcChip.value))
            .map(filterDynamic=>({id: filterDynamic.configChip.id, displayText: filterDynamic.optionsTitleChip}));
        disableAddFilter = false;
        isSearch = true;


        selectedDynamicFilters = this.dynamicFiltersAll.filter(filter=>(!!filter.fcChip.value));

        onDynamicChipSelect(selected) {
             if (!this.selectedDynamicFilters.some(item => selected.id === item.configChip.id)) {
                this.selectedDynamicFilters = [
                    ...this.selectedDynamicFilters,
                    ...this.dynamicFiltersAll.filter((chipFilter) => (chipFilter.configChip.id === selected.id))
                ];
             }
        }

        onDynamicChipRemove(chipIdToRemove) {
            this.selectedDynamicFilters = [...this.selectedDynamicFilters.filter((chip) => (chip.configChip.id !== chipIdToRemove))];
            this.addFilterOptions = this.dynamicFiltersAll
              .filter((filter) => (!this.selectedDynamicFilters.some((item) => item.configChip.id === filter.configChip.id)))
              .map((filterDynamic) => ({
                id: filterDynamic.configChip.id,
                displayText: filterDynamic.optionsTitleChip,
              }));
        }
    }
    const OPTIONS_USERS: DropdownOption[] = ${JSON.stringify(MOCK_USERS)};
    const OPTIONS_COUNTRIES: DropdownOption[] = ${JSON.stringify(MOCK_COUNTRIES)};
    const OPTIONS_CAMPAIGNS: DropdownOption[] = ${JSON.stringify(MOCK_CAMPAIGNS)};
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
