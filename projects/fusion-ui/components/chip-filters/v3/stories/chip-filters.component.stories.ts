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
import {MOCK_USERS} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';

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
                DropdownModule
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
        }
    }
} as Meta<ChipFiltersComponent>;

const ChipFilterTemplate: Story<ChipFiltersComponent> = (args: ChipFiltersComponent) => ({
    props: {...args},
    template: `
<div style="height: 250px;">
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
    </fusion-chip-filters>
</div>`
});

// region Default
export const Default = ChipFilterTemplate.bind({});
Default.args = {
    fcChip1: new FormControl(),
    configChip1: {id: 1, mode: 'static', close: true},
    optionsChip1: MOCK_USERS,
    placeholderPrefixChip1: 'User',
    placeholderChip1: 'All'
};
