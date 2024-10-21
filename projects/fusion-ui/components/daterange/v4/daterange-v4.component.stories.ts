import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeV4Component} from './daterange-v4.component';
import {DaterangeOptions, DaterangeSelection} from '@ironsource/fusion-ui/components/daterange';
import {dedent} from 'ts-dedent';

const BASE_TEMPLATE = `<fusion-daterange 
    [formControl]="formControl"
    [options]="options"
></fusion-daterange>`;

const TODAY = new Date();
const YESTERDAY = new Date(Date.now() - 1000 * 60 * 60 * 24);
const BEFORE_5_DAYS = new Date(Date.now() - 1000 * 60 * 60 * 24 * 5);
const LAST_13_DAYS = new Date(Date.now() - 1000 * 60 * 60 * 24 * 13); // with today, it will 14

export default {
    title: 'V4/Components/Dates/DateRange',
    component: DaterangeV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="display: block; height: 400px">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        },
        docs: {
            description: {
                component: dedent`A ***DateRange*** component is a user interface element that allows users to select a range of dates.
To set and get the selected date range, use the ***formControl*** property with interface. 
                
\`\`\`
interface DaterangeSelection {
    startDate?: Date;
    endDate?: Date;
    startTime?: string;
    endTime?: string;
}
\`\`\`

Also you can set the options for the date range component using the ***options*** property with interface.

\`\`\`
interface DaterangeOptions {
    format?: string; // for date format in placeholder. default is 'd MMM, y'
    presets?: DaterangeCustomPreset[] | DaterangePresets[];  // if you don't want to show the presets, you can set it to empty array
    placeholder?: string;
    overlayAlignPosition?: 'left' | 'right';
    allowFutureSelection?: boolean;
    maxDaysInSelectedRange?: number;
    withTimeSelect?: boolean;
}\`\`\`
`
            }
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
Basic.parameters = {
    docs: {
        description: {
            story: dedent`***options:*** {placeholder: 'Select date range', format: 'MMM dd, y'}`
        }
    }
};

export const Selected: Story = {
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
Selected.parameters = {
    docs: {
        description: {
            story: dedent`***formControl:***                     
\`\`\`
new FormControl({
    startDate: BEFORE_5_DAYS,
    endDate: YESTERDAY
}) as FormControl<DaterangeSelection>
\`\`\``
        }
    }
};

export const Today: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl({
                startDate: TODAY,
                endDate: TODAY
            }) as FormControl<DaterangeSelection>
        },
        template: BASE_TEMPLATE
    })
};
Today.parameters = {
    docs: {
        description: {
            story: dedent`***formControl:***                     
\`\`\`
new FormControl({
    startDate: TODAY,
    endDate: TODAY
}) as FormControl<DaterangeSelection>
\`\`\``
        }
    }
};

export const Last14Days: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl({
                startDate: LAST_13_DAYS,
                endDate: TODAY
            }) as FormControl<DaterangeSelection>
        },
        template: BASE_TEMPLATE
    })
};
Last14Days.storyName = 'Last 14 days';

export const WithoutPresets: Story = {
    render: args => ({
        props: {
            ...args,
            options: {placeholder: 'Select date range', format: 'MMM dd, y', presets: [], overlayAlignPosition: 'left'} as DaterangeOptions
        },
        template: BASE_TEMPLATE
    })
};
WithoutPresets.parameters = {
    docs: {
        description: {
            story: dedent`***options:*** {placeholder: 'Select date range', format: 'MMM dd, y', presets: []}`
        }
    }
};
WithoutPresets.storyName = 'Without presets';

export const LimitedRange: Story = {
    render: args => ({
        props: {
            ...args,
            options: {
                placeholder: 'Select date range',
                format: 'MMM dd, y',
                maxDaysInSelectedRange: 7,
                presets: [],
                overlayAlignPosition: 'left'
            } as DaterangeOptions
        },
        template: BASE_TEMPLATE
    })
};
LimitedRange.parameters = {
    docs: {
        description: {
            story: dedent`***options:*** {placeholder: 'Select date range', format: 'MMM dd, y', presets: [], maxDaysInSelectedRange: 7}`
        }
    }
};
LimitedRange.storyName = 'Limited range';

export const NotAllowFutureDateSelected: Story = {
    render: args => ({
        props: {
            ...args,
            options: {placeholder: 'Select date range', format: 'MMM dd, y', allowFutureSelection: false} as DaterangeOptions
        },
        template: BASE_TEMPLATE
    })
};
NotAllowFutureDateSelected.parameters = {
    docs: {
        description: {
            story: dedent`***options:*** {placeholder: 'Select date range', format: 'MMM dd, y', allowFutureSelection: false}`
        }
    }
};
NotAllowFutureDateSelected.storyName = 'Not future date';

export const WithTimeSelect: Story = {
    render: args => ({
        props: {
            ...args,
            options: {
                placeholder: 'Select date range',
                format: 'MMM dd, y',
                presets: [],
                withTimeSelect: true,
                overlayAlignPosition: 'left'
            } as DaterangeOptions,
            formControl: new FormControl({
                startDate: BEFORE_5_DAYS,
                endDate: YESTERDAY,
                startTime: '12:00',
                endTime: '20:30'
            }) as FormControl<DaterangeSelection>
        },
        template: BASE_TEMPLATE
    })
};
WithTimeSelect.parameters = {
    docs: {
        description: {
            story: dedent`***options:*** {placeholder: 'Select date range', format: 'MMM dd, y', presets: [], withTimeSelect: true}
            ***formControl:*** 
            \`\`\`new FormControl({
                startDate: BEFORE_5_DAYS,
                endDate: YESTERDAY,
                startTime: '12:00',
                endTime: '20:30'
            }) as FormControl<DaterangeSelection>
            \`\`\`
`
        }
    }
};
WithTimeSelect.storyName = 'Selected time';
