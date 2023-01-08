import {Story, Meta} from '@storybook/angular';
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

export default {
    title: 'Components/Dates/Calendar',
    component: CalendarComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, CalendarModule]
        })
    ],
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
    }
} as Meta<CalendarComponent>;

const CalendarTemplate: Story<CalendarComponent> = (args: CalendarComponent) => ({
    props: {...args, daySelected: actionsData.daySelected},
    template: `<div style="width: 250px; margin: auto">
        <fusion-calendar
            (daySelected)="daySelected($event)"
            [configuration]="configuration"
        >
        </fusion-calendar>
</div>`
});

// region Default
export const Default = CalendarTemplate.bind({});
Default.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};
Default.parameters = {
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
};
// endregion

// region SelectedToday
export const SelectedToday = CalendarTemplate.bind({});
SelectedToday.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: TODAY} as DaterangeSelection
    } as CalendarComponentConfigurations
};
SelectedToday.parameters = {
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
};
// endregion

// region SelectedTomorrow
export const SelectedTomorrow = CalendarTemplate.bind({});
SelectedTomorrow.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: TOMORROW} as DaterangeSelection
    } as CalendarComponentConfigurations
};
SelectedTomorrow.parameters = {
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
};
// endregion

// region FutureSelectionNotAllowed
export const FutureSelectionNotAllowed = CalendarTemplate.bind({});
FutureSelectionNotAllowed.args = {
    configuration: {
        month: TODAY,
        allowFutureSelection: false,
        calendarType: CalendarType.DATE_RANGE,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};
FutureSelectionNotAllowed.parameters = {
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
};
// endregion

// region PreviousMonth
export const PreviouseMonth = CalendarTemplate.bind({});
PreviouseMonth.args = {
    configuration: {
        month: PREVIOUS_MONTH,
        allowFutureSelection: true,
        calendarType: CalendarType.DATE_PICKER,
        selection: {date: null} as DaterangeSelection
    } as CalendarComponentConfigurations
};
PreviouseMonth.parameters = {
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
    month: PREVIOUS_MONTH,
    selection: { date: null } as DaterangeSelection,
  };

  daySelected(selectedDate: Day) {
    console.log('Date selected: ', selectedDate);
  }
}
const PREVIOUS_MONTH: Date = new Date();
PREVIOUS_MONTH.setDate(TODAY.getMonth() -1 );

`,
            format: true,
            type: 'code'
        }
    }
};
// endregion
