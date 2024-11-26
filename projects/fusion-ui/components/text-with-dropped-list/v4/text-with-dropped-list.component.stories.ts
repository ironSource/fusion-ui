import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TextWithDroppedListComponent} from './text-with-dropped-list.component';
import {
    APPLICATION_LIST_OPTIONS,
    BASE_LIST_OPTIONS,
    COUNTRY_LIST_OPTIONS
} from '@ironsource/fusion-ui/components/dropped-list/v4/dropped-list.mock';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';

export default {
    title: 'V4/Components/DataDisplay/Text with dropped list',
    component: TextWithDroppedListComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        }),
        componentWrapperDecorator(story => `<div style="height: 250px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        text: 'Text with help border',
        list: BASE_LIST_OPTIONS
    }
} as Meta<TextWithDroppedListComponent>;

type Story = StoryObj<TextWithDroppedListComponent>;

export const Basic: Story = {};

export const Size: Story = {
    render: args => ({
        props: {
            ...args,
            appList: APPLICATION_LIST_OPTIONS,
            countryList: COUNTRY_LIST_OPTIONS
        },
        template: `
<div style="display: flex; flex-direction: column; gap: 24px;">
    <fusion-text-with-dropped-list [text]="text" [list]="appList"></fusion-text-with-dropped-list>
    <fusion-text-with-dropped-list size="small" [text]="text" [list]="countryList"></fusion-text-with-dropped-list>    
</div>
`
    })
};

export const Disabled: Story = {
    render: args => ({
        props: {...args},
        template: `
<div style="display: flex; flex-direction: column; gap: 24px;">
    <fusion-text-with-dropped-list [disabled]="true" [text]="text" [list]="list"></fusion-text-with-dropped-list>
    <fusion-text-with-dropped-list [disabled]="true" size="small" [text]="text" [list]="list"></fusion-text-with-dropped-list>    
</div>
`
    })
};
