import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {APPLICATION_LIST_OPTIONS, BASE_LIST_OPTIONS, BIG_LIST_OPTIONS, COUNTRY_LIST_OPTIONS} from './dropped-list.mock';
import {DroppedListComponent} from './dropped-list.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

export default {
    title: 'V4/Components/DataDisplay/Text with dropped list/Dropped List',
    component: DroppedListComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), FlagComponent, TooltipDirective]
        }),
        componentWrapperDecorator(story => `<div style="width: fit-content;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        list: BASE_LIST_OPTIONS
    }
} as Meta<DroppedListComponent>;

type Story = StoryObj<DroppedListComponent>;

export const Basic: Story = {};

export const WithApplication: Story = {};
WithApplication.args = {list: APPLICATION_LIST_OPTIONS};

export const WithFlag: Story = {};
WithFlag.args = {list: COUNTRY_LIST_OPTIONS};

export const WithBigList: Story = {};
WithBigList.args = {list: BIG_LIST_OPTIONS};
