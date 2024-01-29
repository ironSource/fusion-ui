import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {MultiDropdownComponent} from '@ironsource/fusion-ui/components/multi-dropdown/v4';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter/v4';
import {ChipFiltersV4Component} from '../chip-filters-v4.component';
import {AD_FORMAT_OPTIONS, AD_TYPE_OPTIONS, CATEGORY_OPTIONS, PLATFORM_OPTIONS, STATUS_OPTIONS} from './chip-filters-v4.stories.mock';

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
            placeholderChip5: ''
        },
        template: basicTemplate
    })
};
