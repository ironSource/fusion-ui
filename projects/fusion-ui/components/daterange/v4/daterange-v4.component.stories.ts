import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeV4Component} from './daterange-v4.component';
import {DaterangeOptions, DaterangeSelection} from '@ironsource/fusion-ui/components/daterange';

const BASE_TEMPLATE = `<fusion-daterange 
    [formControl]="formControl"
    [options]="options"
    [selectorPlaceholder]="selectorPlaceholder"
></fusion-daterange>`;

const TODAY = new Date();
const YESTERDAY = new Date(Date.now() - 1000 * 60 * 60 * 24);
const BEFORE_5_DAYS = new Date(Date.now() - 1000 * 60 * 60 * 24 * 5);

export default {
    title: 'V4/Components/Dates/DateRange',
    component: DaterangeV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="display: block;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        formControl: new FormControl() as FormControl<DaterangeSelection>,
        options: {placeholder: 'Select date range', format: 'MMM dd, y'} as DaterangeOptions
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<DaterangeV4Component>;

type Story = StoryObj<DaterangeV4Component>;

export const Basic: Story = {};

export const Selected5Days: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl({
                startDate: BEFORE_5_DAYS,
                endDate: YESTERDAY
            }) as FormControl<DaterangeSelection>
        },
        template: BASE_TEMPLATE
    })
};
