import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeComponent, DaterangeCustomPreset, DaterangeModule, DaterangeOptions, DaterangeSelection} from './';

export default {
    title: 'Components/Dates/DatePicker',
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
                component: dedent`**Date picker**`
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
    props: {...args},
    template: `<div style="height: 380px; width: 250px;">
        <fusion-daterange
            [formControl]="formControl"
            [options]="options"
        ></fusion-daterange>
</div>`
});

// region Default
export const Default = CalendarTemplate.bind({});
Default.args = {
    formControl: new FormControl() as FormControl<DaterangeSelection>,
    options: {
        calendarAmount: 1,
        presets: []
    } as DaterangeOptions
};
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange/v3';
import { DaterangeSelection, DaterangeOptions } from '@ironsource/fusion-ui/components/daterange/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 380px; width: 250px;">
        <fusion-daterange
            [formControl]="formControl"
            [options]="options"
        ></fusion-daterange>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, DaterangeModule],
})
export class FusionStoryWrapperComponent {
  formControl: FormControl<DaterangeSelection> = new FormControl();
  options:DaterangeOptions = {
    calendarAmount: 1,
    presets: [],
  };
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion
