import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {AppHeaderComponent} from './app-header.component';

export default {
    title: 'V4/Components/AppHeader',
    component: AppHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div>${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        appName: 'Words for Winners',
        appImageSrc: 'https://fusion.ironsrc.net/assets/images/v4/app_mock/Words_for_Winners.png',
        platform: 'android',
        appKey: '3214325'
    }
} as Meta<AppHeaderComponent>;

type Story = StoryObj<AppHeaderComponent>;

export const Basic: Story = {};

export const Small: Story = {};
Small.args = {
    size: 'small'
};

export const AbIcon: Story = {};
AbIcon.args = {
    size: 'small',
    abTest: 'ab'
};
