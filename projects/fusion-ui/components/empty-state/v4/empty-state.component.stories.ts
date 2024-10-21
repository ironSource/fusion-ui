import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {EmptyStateComponent} from './empty-state.component';

export default {
    title: 'V4/Components/DataDisplay/EmptyState',
    component: EmptyStateComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ButtonComponent]
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
        title: 'Empty State Title',
        description: 'Empty State Description'
    }
} as Meta<EmptyStateComponent>;

type Story = StoryObj<EmptyStateComponent>;

export const Basic: Story = {};

export const WithButton: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-empty-state [title]="title" [description]="description">
            <fusion-button variant="outlined">Click me</fusion-button>
        </fusion-empty-state>
        `
    })
};

export const WithIllustration: Story = {
    render: args => ({
        props: {
            ...args,
            type: 'noResult',
            title: 'No ad units to display',
            description: 'Add a new ad unit to get started'
        },
        template: `
        <fusion-empty-state [type]="type" [title]="title" [description]="description">
            <fusion-button variant="outlined">Label</fusion-button>
        </fusion-empty-state>
        `
    })
};
