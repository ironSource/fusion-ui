import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TrendIndicatorComponent} from './trend-indicator.component';
import {TrendStatus} from './trend-indicator.entities';

export default {
    title: 'V4/Components/DataVisualization/TrendIndicator',
    component: TrendIndicatorComponent,
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
                component: dedent`***TrendIndicatorComponent***.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        value: '0.0%',
        status: 'neutral' as TrendStatus,
        hasBackground: true
    }
} as Meta<TrendIndicatorComponent>;

type Story = StoryObj<TrendIndicatorComponent>;

export const Neutral: Story = {
    render: args => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: row; gap: 16px; align-items: center;">
            <fusion-trend-indicator [status]="status" [value]="value" [hasBackground]="hasBackground"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [hasBackground]="hasBackground"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [value]="value" [hasBackground]="false"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [hasBackground]="false"></fusion-trend-indicator>
         </div>
        `
    })
};
export const Positive: Story = {
    render: args => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: row; gap: 16px; align-items: center;">
            <fusion-trend-indicator [status]="status" [value]="value" [hasBackground]="hasBackground"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [hasBackground]="hasBackground"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [value]="value" [hasBackground]="false"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [hasBackground]="false"></fusion-trend-indicator>
         </div>
        `
    }),
    args: {
        value: '0.5%',
        status: 'up' as TrendStatus
    }
};
export const Negative: Story = {
    render: args => ({
        props: args,
        template: `
        <div style="display: flex; flex-direction: row; gap: 16px; align-items: center;">
            <fusion-trend-indicator [status]="status" [value]="value" [hasBackground]="hasBackground"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [hasBackground]="hasBackground"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [value]="value" [hasBackground]="false"></fusion-trend-indicator>
            <fusion-trend-indicator [status]="status" [hasBackground]="false"></fusion-trend-indicator>
         </div>
        `
    }),
    args: {
        value: '0.5%',
        status: 'down' as TrendStatus
    }
};
