import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ModalV4Component} from './modal-v4.component';
import {ModalV4StoryWrapperComponent} from './modal-v4-story-wrapper/modal-v4-story-wrapper.component';
import {defaultTestId} from 'projects/E2E/tests/components/dialog/consts';

export default {
    title: 'V4/Components/Feedback/Dialog/Dialog',
    component: ModalV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ModalV4StoryWrapperComponent]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
        /*layout: 'centered'*/
    },
    args: {
        title: 'Title',
        content: 'This is a dialog that demonstrates the usage of the DialogTitle and DialogActions components!',
        secondaryButtonLabel: 'Cancel',
        primaryButtonLabel: 'Ok'
    }
} as Meta<ModalV4Component>;

type Story = StoryObj<ModalV4Component>;

export const Basic: Story = {
    render: args => ({
        props: {
            ...args,
            testId: defaultTestId
        },
        template: `
        <fusion-modal-story-wrapper [testId]="testId"></fusion-modal-story-wrapper>
        `
    })
};

export const Size: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-modal-story-wrapper mode="size"></fusion-modal-story-wrapper>
        `
    })
};

export const Delete: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-modal-story-wrapper mode="delete"></fusion-modal-story-wrapper>
        `
    })
};

export const SubTitle: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-modal-story-wrapper mode="subTitle"></fusion-modal-story-wrapper>
        `
    })
};

export const NoHeader: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-modal-story-wrapper mode="noHeader"></fusion-modal-story-wrapper>
        `
    })
};
