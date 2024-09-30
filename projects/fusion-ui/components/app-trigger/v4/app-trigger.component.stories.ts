import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {AppTriggerComponent} from './app-trigger.component';

export default {
    title: 'V4/Components/Dropdown/Triggers/Applications',
    component: AppTriggerComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="width: 280px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<AppTriggerComponent>;

type Story = StoryObj<AppTriggerComponent>;

export const Basic: Story = {};
Basic.args = {
    placeholder: 'All apps selected (24)'
};

export const SelectRequired: Story = {};
SelectRequired.args = {
    placeholder: 'Select app',
    required: true
};

export const SingleSelected: Story = {};
SingleSelected.args = {
    placeholder: 'Select app',
    required: true,
    application: {
        name: 'Words for Winners',
        imageSrc: 'https://fusion.ironsrc.net/assets/images/v4/app_mock/Words_for_Winners.png',
        platform: 'android'
    }
};

export const SingleSelectedWithCopy: Story = {};
SingleSelectedWithCopy.args = {
    placeholder: 'Select app',
    required: true,
    application: {
        name: 'Words for Winners',
        imageSrc: 'https://fusion.ironsrc.net/assets/images/v4/app_mock/Words_for_Winners.png',
        platform: 'android',
        key: '324571'
    }
};

export const MultipleSelected: Story = {};
MultipleSelected.args = {
    placeholder: 'All apps selected (24)'
};
