import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeComponent, DaterangeModule} from './';

export default {
    title: 'Components/Dates/Date range',
    component: DaterangeComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DaterangeModule
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5268%3A162019&t=bF5K0Z1370QwBbYu-1'
        },
        docs: {
            description: {
                component: dedent`**Date range picker**`
            }
        }
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<DaterangeComponent>;

const CalendarTemplate: Story<DaterangeComponent> = (args: DaterangeComponent) => ({
    props: {...args /*, daySelected: actionsData.daySelected*/},
    template: `<div style="width: 250px; margin: auto">
        <fusion-daterange
            [formControl]="formControl"
            [minDate]="minDate"
            [maxDate]="maxDate"
            [options]="option"
        ></fusion-daterange>
</div>`
});

// region Default
export const Default = CalendarTemplate.bind({});
Default.args = {
    formControl: new FormControl()
};
/*Default.parameters = {
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
};*/
// endregion
