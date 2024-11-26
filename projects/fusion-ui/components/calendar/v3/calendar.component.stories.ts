import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CalendarModule} from './calendar.module';
import {CalendarComponent} from './calendar.component';
import {CalendarComponentConfigurations, CalendarType} from '@ironsource/fusion-ui/components/calendar';
import {DaterangeSelection} from '@ironsource/fusion-ui/components/daterange';

const actionsData = {
    daySelected: action('daySelected')
};

const TODAY: Date = new Date();
const TOMORROW: Date = new Date(TODAY);
TOMORROW.setDate(TODAY.getDate() + 1);
const PREVIOUS_MONTH: Date = new Date(TODAY);
PREVIOUS_MONTH.setDate(TODAY.getMonth() - 1);

const START_DATE = new Date(TODAY.getFullYear(), TODAY.getMonth(), 2);
const END_DATE = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, -3);

export default {
    title: 'V3/Components/Dates/Calendar',
    component: CalendarComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, CalendarModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5268%3A162019&t=bF5K0Z1370QwBbYu-1'
        },
        docs: {
            description: {
                component: dedent`**Calendar** usually used as part of other date related components like date / date-range for month / day selection. It represent only one, defined in configuration month.`
            }
        }
    },
    args: {
        configuration: {
            month: TODAY,
            allowFutureSelection: true,
            calendarType: CalendarType.DATE_PICKER,
            selection: {date: null} as DaterangeSelection
        } as CalendarComponentConfigurations
    }
} as Meta<CalendarComponent>;

const templateGrid = `<fusion-calendar class="fu-calendar-grid"
            [configuration]="configuration"
        />`;

type Story = StoryObj<CalendarComponent>;

export const Basic: Story = {
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import {
      CalendarModule,
      CalendarType,
      CalendarComponentConfigurations,
      Day,
    } from '@ironsource/fusion-ui/components/calendar';
    import { DaterangeSelection } from '@ironsource/fusion-ui/components/daterange';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width: 250px; margin: auto">
            <fusion-calendar
                (daySelected)="daySelected($event)"
                [configuration]="configuration"
            >
            </fusion-calendar>
    </div>\`,
      standalone: true,
      imports: [CalendarModule],
    })
    export class FusionStoryWrapperComponent {
      configuration: CalendarComponentConfigurations = {
        parentDaterangeId: 'calendar_id_123',
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        month: new Date(),
        selection: { date: null } as DaterangeSelection,
      };

      daySelected(selectedDate: Day) {
        console.log('Date selected: ', selectedDate);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const SelectedToday: Story = {
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import {
      CalendarModule,
      CalendarType,
      CalendarComponentConfigurations,
      Day,
    } from '@ironsource/fusion-ui/components/calendar';
    import { DaterangeSelection } from '@ironsource/fusion-ui/components/daterange';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width: 250px; margin: auto">
            <fusion-calendar
                (daySelected)="daySelected($event)"
                [configuration]="configuration"
            >
            </fusion-calendar>
    </div>\`,
      standalone: true,
      imports: [CalendarModule],
    })
    export class FusionStoryWrapperComponent {
      configuration: CalendarComponentConfigurations = {
        parentDaterangeId: 'calendar_id_123',
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        month: TODAY,
        selection: { date: TODAY } as DaterangeSelection,
      };

      daySelected(selectedDate: Day) {
        console.log('Date selected: ', selectedDate);
      }
    }
    const TODAY: Date = new Date();
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
SelectedToday.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: TODAY} as DaterangeSelection
    } as CalendarComponentConfigurations
};

export const SelectedTomorrow: Story = {
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import {
      CalendarModule,
      CalendarType,
      CalendarComponentConfigurations,
      Day,
    } from '@ironsource/fusion-ui/components/calendar';
    import { DaterangeSelection } from '@ironsource/fusion-ui/components/daterange';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width: 250px; margin: auto">
            <fusion-calendar
                (daySelected)="daySelected($event)"
                [configuration]="configuration"
            >
            </fusion-calendar>
    </div>\`,
      standalone: true,
      imports: [CalendarModule],
    })
    export class FusionStoryWrapperComponent {
      configuration: CalendarComponentConfigurations = {
        parentDaterangeId: 'calendar_id_123',
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        month: TODAY,
        selection: { date: TOMORROW } as DaterangeSelection,
      };

      daySelected(selectedDate: Day) {
        console.log('Date selected: ', selectedDate);
      }
    }
    const TODAY: Date = new Date();
    const TOMORROW: Date = new Date(TODAY);
    TOMORROW.setDate(TODAY.getDate() + 1);
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
SelectedTomorrow.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: TOMORROW} as DaterangeSelection
    } as CalendarComponentConfigurations
};

export const FutureSelectionNotAllowed: Story = {
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import {
      CalendarModule,
      CalendarType,
      CalendarComponentConfigurations,
      Day,
    } from '@ironsource/fusion-ui/components/calendar';
    import { DaterangeSelection } from '@ironsource/fusion-ui/components/daterange';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width: 250px; margin: auto">
            <fusion-calendar
                (daySelected)="daySelected($event)"
                [configuration]="configuration"
            >
            </fusion-calendar>
    </div>\`,
      standalone: true,
      imports: [CalendarModule],
    })
    export class FusionStoryWrapperComponent {
      configuration: CalendarComponentConfigurations = {
        parentDaterangeId: 'calendar_id_123',
        allowFutureSelection: false,
        calendarType: CalendarType.DATE_PICKER,
        month: new Date(),
        selection: { date: null } as DaterangeSelection,
      };

      daySelected(selectedDate: Day) {
        console.log('Date selected: ', selectedDate);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
FutureSelectionNotAllowed.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: false,
        calendarType: CalendarType.DATE_RANGE,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};
// endregion

// region GridMode
export const GridMode: Story = {
    render: args => ({
        props: {
            configuration: {
                month: TODAY,
                allowFutureSelection: true,
                calendarType: CalendarType.DATE_PICKER,
                selection: {date: null} as DaterangeSelection
            } as CalendarComponentConfigurations
        },
        template: templateGrid
    })
};

export const GridModeSelectedDay: Story = {
    render: args => ({
        props: {
            configuration: {
                month: TODAY,
                allowFutureSelection: true,
                calendarType: CalendarType.DATE_PICKER,
                selection: {date: TODAY} as DaterangeSelection
            } as CalendarComponentConfigurations
        },
        template: templateGrid
    })
};

export const GridModeSelectedRange: Story = {
    render: args => ({
        props: {
            configuration: {
                month: TODAY,
                allowFutureSelection: true,
                calendarType: CalendarType.DATE_PICKER,
                selection: {startDate: START_DATE, endDate: END_DATE} as DaterangeSelection
            } as CalendarComponentConfigurations
        },
        template: templateGrid
    })
};
// endregion
