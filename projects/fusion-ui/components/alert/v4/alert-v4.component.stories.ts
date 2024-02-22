import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {AlertV4Component} from './alert-v4.component';

export default {
    title: 'V4/Components/Feedback/Alert',
    component: AlertV4Component,
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
        description: 'Alert Description',
        color: 'success'
    }
} as Meta<AlertV4Component>;

type Story = StoryObj<AlertV4Component>;

export const Basic: Story = {};

export const Rectangle: Story = {};
Rectangle.args = {
    color: 'info',
    title: 'Alert title',
    rounded: false
};

export const Severities: Story = {
    render: args => ({
        props: {
            ...args,
            title: 'Alert title',
            description: 'Alert Description'
        },
        template: `
        <div style="display: flex; flex-direction: column; gap: 16px">
            <div style="display: flex; flex-direction: column; gap: 8px">
                <label class="font-v4-subtitle-2" style="color: #646464;">Success</label>
                <fusion-alert-v4 [title]="title" [description]="description" color="success"></fusion-alert-v4>    
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px">
                <label class="font-v4-subtitle-2" style="color: #646464;">Danger</label>
                <fusion-alert-v4 [title]="title" [description]="description" color="danger"></fusion-alert-v4>    
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px">
                <label class="font-v4-subtitle-2" style="color: #646464;">Warning</label>
                <fusion-alert-v4 [title]="title" [description]="description" color="warning"></fusion-alert-v4>    
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px">
                <label class="font-v4-subtitle-2" style="color: #646464;">Info</label>
                <fusion-alert-v4 [title]="title" [description]="description" color="info"></fusion-alert-v4>    
            </div>
        </div>
        `
    })
};

export const Variants: Story = {
    render: args => ({
        props: {
            title: 'Alert title',
            description: 'Alert Description'
        },
        template: `
        <div style="display: flex; flex-direction: column; gap: 16px">
            <div style="display: flex; flex-direction: column; gap: 8px">
                <label class="font-v4-subtitle-2" style="color: #646464;">Standard</label>
                <fusion-alert-v4 [title]="title" [description]="description" color="info"></fusion-alert-v4>    
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px">
                <label class="font-v4-subtitle-2" style="color: #646464;">Outlined</label>
                <fusion-alert-v4 [title]="title" [description]="description" variant="outlined" color="info"></fusion-alert-v4>    
            </div>
        </div>
        `
    })
};

export const Actions: Story = {};
Actions.args = {
    color: 'info',
    title: 'Alert title',
    actionText: 'Label'
};

export const Dismissible: Story = {};
Dismissible.args = {
    color: 'info',
    title: 'Alert title',
    dismissible: true
};
