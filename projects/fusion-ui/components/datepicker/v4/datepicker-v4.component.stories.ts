import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DatepickerV4Component} from './datepicker-v4.component';
import {DatepickerOptions, DatepickerSelection} from './datepicker-v4.entities';

const TODAY = new Date();

export default {
    title: 'V4/Components/Dates/DatePicker',
    component: DatepickerV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        }),
        componentWrapperDecorator(story => `<div style="display: block; height: 300px; position: relative">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        },
        docs: {
            description: {
                component: dedent`A ***DatePicker*** component is a reusable user interface element designed to simplify the process of selecting dates in web applications. It provides an interactive calendar interface that allows users to easily choose a specific date without manually typing it.
To set and get the selected date, use the ***formControl*** property with interface. 
                
\`\`\`
interface DatepickerSelection {
    date?: Date;
}
\`\`\`

Also you can set the options for the date picker component using the ***options*** property with interface.

\`\`\`
interface DaterangeOptions {
    format?: string; // for date format in placeholder. default is 'd MMM, y'
    placeholder?: string;
    allowFutureSelection?: boolean;
    overlayAlignPosition?: 'left' | 'right'; // default is 'right' but calculated based on the component position
}\`\`\`
`
            }
        }
    },
    args: {
        formControl: new FormControl() as FormControl<DatepickerSelection>,
        options: {overlayAlignPosition: 'left'} as DatepickerOptions
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<DatepickerV4Component>;

type Story = StoryObj<DatepickerV4Component>;

export const Basic: Story = {};
