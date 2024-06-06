import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputHelperComponent} from '@ironsource/fusion-ui/components/input-helper/v4/input-helper.component';

export default {
    title: 'V4/Components/Inputs/Helper',
    component: InputHelperComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
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
        text: 'Helper text'
    }
} as Meta<InputHelperComponent>;

type Story = StoryObj<InputHelperComponent>;

export const Basic: Story = {};

export const WithIcon: Story = {
    args: {
        iconName: 'ph/fill/info'
    }
};

export const Error: Story = {
    args: {
        iconName: 'ph/fill/warning-octagon',
        state: 'error'
    }
};

export const Warning: Story = {
    args: {
        iconName: 'ph/fill/warning',
        state: 'warning'
    }
};

export const Success: Story = {
    args: {
        iconName: 'ph/fill/check-circle',
        state: 'success'
    }
};
