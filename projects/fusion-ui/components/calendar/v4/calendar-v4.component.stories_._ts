import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CalendarComponentConfigurations, CalendarType} from '@ironsource/fusion-ui/components/calendar';
import {DaterangeSelection} from '@ironsource/fusion-ui/components/daterange';
import {CalendarV4Component} from './calendar-v4.component';

const TODAY: Date = new Date();
const TOMORROW: Date = new Date(TODAY);
TOMORROW.setDate(TODAY.getDate() + 1);
const PREVIOUS_MONTH: Date = new Date(new Date().setDate(0));

const START_DATE = new Date(TODAY.getFullYear(), TODAY.getMonth(), 2);
const END_DATE = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, -3);

export default {
    title: 'V4/Components/Dates/Calendar',
    component: CalendarV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
        /*componentWrapperDecorator(story => `<div style="display: block; border: solid 1px green;">${story}</div>`)*/
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<CalendarV4Component>;

type Story = StoryObj<CalendarV4Component>;

export const Basic: Story = {};
Basic.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};

export const SelectedToday: Story = {};
SelectedToday.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: TODAY} as DaterangeSelection
    } as CalendarComponentConfigurations
};

export const FutureSelectionNotAllowed: Story = {};
FutureSelectionNotAllowed.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: false,
        calendarType: CalendarType.DATE_RANGE,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};

export const PreviousMonth: Story = {};
PreviousMonth.args = {
    configuration: {
        month: PREVIOUS_MONTH,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};

export const SelectedRange: Story = {};
SelectedRange.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {startDate: START_DATE, endDate: END_DATE} as DaterangeSelection
    } as CalendarComponentConfigurations
};
