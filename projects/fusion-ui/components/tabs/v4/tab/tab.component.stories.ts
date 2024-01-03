import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TabComponent} from './tab.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

export default {
    title: 'V4/Components/Tabs/Tab',
    component: TabComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***TabComponent*** is a reusable element designed to display tabs on web application.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        disabled: false,
        selected: false
    }
} as Meta<TabComponent>;

type Story = StoryObj<TabComponent>;

export const Default: Story = {
    render: args => ({
        props: args,
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">Tab</fusion-tab>
</div>
`
    })
};

export const Disabled: Story = {
    render: args => ({
        props: {...args, disabled: true},
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">Tab</fusion-tab>
</div>
`
    })
};

export const Active: Story = {
    render: args => ({
        props: {...args, selected: true},
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">Tab</fusion-tab>
</div>
`
    })
};

/*
export const ActivePageMode: Story = {
    render: args => ({
        props: {...args, selected: true, pageMode: true},
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">Tab</fusion-tab>
</div>
`
    })
};
*/

export const WithIcon: Story = {
    render: args => ({
        props: args,
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon style="width: 16px; height: 16px" name="v4/branded/ios"></fusion-icon> Tab
    </fusion-tab>
</div>
`
    })
};

export const WithIconDisabled: Story = {
    render: args => ({
        props: {...args, disabled: true},
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon style="width: 16px; height: 16px" name="v4/branded/ios"></fusion-icon> Tab
    </fusion-tab>
</div>
`
    })
};

export const WithIconActive: Story = {
    render: args => ({
        props: {...args, selected: true},
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon style="width: 16px; height: 16px" name="v4/branded/ios"></fusion-icon> Tab
    </fusion-tab>
</div>
`
    })
};

/*export const WithIconActivePageMode: Story = {
    render: args => ({
        props: {...args, selected: true, pageMode: true},
        template: `
<div>
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon style="width: 16px; height: 16px" name="v4/branded/ios"></fusion-icon> Tab
    </fusion-tab>
</div>
`
    })
};*/
