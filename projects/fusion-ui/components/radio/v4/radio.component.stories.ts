import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {RadioComponent} from './radio.component';

export default {
    title: 'V4/Components/Inputs/RadioButton',
    component: RadioComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, FlagModule, TooltipModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        label: 'Label',
        name: 'radioName',
        value: 'radioValue',
        selected: false,
        disabled: false
    },
    argTypes: {
        value: {
            control: 'text'
        }
    }
} as Meta<RadioComponent>;

type Story = StoryObj<RadioComponent>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
    <fusion-radio
        [label]="label"
        [name]="name"
        [value]="value"
        [selected]="selected"
        [disabled]="disabled"
    ></fusion-radio>
`
    })
};

export const States: Story = {
    render: args => ({
        props: args,
        template: `<div style="width: 700px; display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 16px">
    <fusion-radio
        label="Regular"
        name="Regular"
    ></fusion-radio>
    <fusion-radio
        label="Selected"
        name="Selected"
        [selected]="true"
    ></fusion-radio>
    <fusion-radio
        label="Disabled"
        label="Disabled"
        [disabled]="true"
    ></fusion-radio>
    <fusion-radio
        label="Disabled selected"
        name="DisabledSelected"
        [disabled]="true"
        [selected]="true"
    ></fusion-radio>
</div>`
    })
};
