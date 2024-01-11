import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ToggleButtonGroupComponent} from './toggle-button-group.component';
import {ToggleButtonGroupOption} from '@ironsource/fusion-ui/components/toggle-button-group/v4/toggle-button-group.entities';

export default {
    title: 'V4/Components/Buttons/ToggleButton',
    component: ToggleButtonGroupComponent,
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
                component: dedent`***ToggleButtonGroupComponent***.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        options: [
            {
                id: 1,
                label: 'Pie',
                icon: 'ph/chart-pie'
            },
            {
                id: 2,
                label: 'Line',
                icon: 'ph/chart-line-up'
            },
            {
                id: 3,
                label: 'Bar',
                icon: 'ph/chart-bar'
            }
        ] as ToggleButtonGroupOption[],
        size: 'medium'
    }
} as Meta<ToggleButtonGroupComponent>;

type Story = StoryObj<ToggleButtonGroupComponent>;

export const Default: Story = {};

export const Color: Story = {
    render: args => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: column; gap: 24px;">
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Default</div>
                <fusion-toggle-button-group color="default" [options]="options"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Primary</div>
                <fusion-toggle-button-group color="primary" [options]="options"></fusion-toggle-button-group>
            </div>
         </div>
        `
    })
};

export const Variants: Story = {
    render: args => ({
        props: {
            ...args,
            optionsIcon: [
                {
                    id: 1,
                    icon: 'ph/chart-pie'
                },
                {
                    id: 2,
                    icon: 'ph/chart-line-up'
                },
                {
                    id: 3,
                    icon: 'ph/chart-bar'
                }
            ] as ToggleButtonGroupOption[],
            optionsText: [
                {
                    id: 1,
                    label: 'Pie'
                },
                {
                    id: 2,
                    label: 'Line'
                },
                {
                    id: 3,
                    label: 'Bar'
                }
            ] as ToggleButtonGroupOption[]
        },
        template: `
        <div style="display: flex; flex-direction: column; gap: 24px;">
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Icon</div>
                <fusion-toggle-button-group [options]="optionsIcon"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Text</div>
                <fusion-toggle-button-group [options]="optionsText"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Icon and text</div>
                <fusion-toggle-button-group [options]="options"></fusion-toggle-button-group>
            </div>
         </div>
        `
    })
};

export const Sizes: Story = {
    render: args => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: column; gap: 24px;">
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Small</div>
                <fusion-toggle-button-group size="small" [options]="options"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Medium</div>
                <fusion-toggle-button-group size="medium" [options]="options"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Large</div>
                <fusion-toggle-button-group size="large" [options]="options"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div>Extra Large</div>
                <fusion-toggle-button-group size="xlarge" [options]="options"></fusion-toggle-button-group>
            </div>
         </div>
        `
    })
};
