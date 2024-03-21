import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ToggleButtonGroupComponent} from './toggle-button-group.component';
import {ToggleButtonGroupOption} from '@ironsource/fusion-ui/components/toggle-button-group/v4/toggle-button-group.entities';

const formControl = new FormControl({
    id: 1,
    label: 'Pie',
    icon: 'ph/chart-pie'
});

export default {
    title: 'V4/Components/Buttons/ToggleButton',
    component: ToggleButtonGroupComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
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
        size: 'medium',
        color: 'default',
        formControl: formControl,
        testId: 'testId'
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<ToggleButtonGroupComponent>;

type Story = StoryObj<ToggleButtonGroupComponent>;

export const Default: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-toggle-button-group color="default" [size]="size" [color]="color" [options]="options"
        [formControl]="formControl" [testId]="testId"></fusion-toggle-button-group>
        `
    })
};

export const Color: Story = {
    render: args => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: column; gap: 24px;">
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Default</div>
                <fusion-toggle-button-group color="default" [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Primary</div>
                <fusion-toggle-button-group color="primary" [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
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
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Icon</div>
                <fusion-toggle-button-group [options]="optionsIcon" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Text</div>
                <fusion-toggle-button-group [options]="optionsText" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Icon and text</div>
                <fusion-toggle-button-group [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
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
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Small</div>
                <fusion-toggle-button-group size="small" [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Medium</div>
                <fusion-toggle-button-group size="medium" [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Large</div>
                <fusion-toggle-button-group size="large" [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px">
                <div style="font-size: 13px; color: hsl(0, 0%, 39.3%)">Extra Large</div>
                <fusion-toggle-button-group size="xlarge" [options]="options" [formControl]="formControl"></fusion-toggle-button-group>
            </div>
         </div>
        `
    })
};

export const Steps: Story = {
    render: args => ({
        props: {
            ...args,
            optionsIcon2: [
                {
                    id: 1,
                    icon: 'ph/chart-pie',
                    tooltip: 'Pie'
                },
                {
                    id: 2,
                    icon: 'ph/chart-line-up',
                    tooltip: 'Line'
                }
            ] as ToggleButtonGroupOption[],
            optionsIcon3: [
                {
                    id: 1,
                    icon: 'ph/chart-pie',
                    tooltip: 'Pie'
                },
                {
                    id: 2,
                    icon: 'ph/chart-line-up',
                    tooltip: 'Line'
                },
                {
                    id: 3,
                    icon: 'ph/chart-bar',
                    tooltip: 'Bar'
                }
            ] as ToggleButtonGroupOption[],
            optionsIcon4: [
                {
                    id: 1,
                    icon: 'ph/chart-pie',
                    tooltip: 'Pie'
                },
                {
                    id: 2,
                    icon: 'ph/chart-line-up',
                    tooltip: 'Line'
                },
                {
                    id: 3,
                    icon: 'ph/chart-bar',
                    tooltip: 'Bar'
                },
                {
                    id: 4,
                    icon: 'ph/chart-scatter',
                    tooltip: 'Scatter'
                }
            ] as ToggleButtonGroupOption[]
        },
        template: `
        <div style="display: flex; flex-direction: row; gap: 24px;">
            <fusion-toggle-button-group [options]="optionsIcon2" [formControl]="formControl"></fusion-toggle-button-group>
            <fusion-toggle-button-group [options]="optionsIcon3" [formControl]="formControl"></fusion-toggle-button-group>
            <fusion-toggle-button-group [options]="optionsIcon4" [formControl]="formControl"></fusion-toggle-button-group>
        </div>
        `
    })
};
