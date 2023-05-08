import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeComponent, DaterangeCustomPreset, DaterangeModule, DaterangeOptions, DaterangeSelection} from './';
import {ApiService} from '@ironsource/fusion-ui';

const TODAY: Date = new Date();
const DAYS_AGO_3: Date = new Date(TODAY);
DAYS_AGO_3.setDate(TODAY.getDate() - 2);

const CUSTOM_PRESET_LAST_3_DAYS: DaterangeCustomPreset = {
    label: 'Last 3 days',
    startDate: DAYS_AGO_3,
    endDate: TODAY
};

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
            ],
            providers: [ApiService]
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

const CalendarTemplate: StoryFn<DaterangeComponent> = (args: DaterangeComponent) => ({
    props: {...args},
    template: `<div style="height: 390px; width: 250px;">
        <fusion-daterange
            [formControl]="formControl"
            [options]="options"
        ></fusion-daterange>
</div>`
});

export const Default = {
    render: CalendarTemplate,

    args: {
        formControl: new FormControl() as FormControl<DaterangeSelection>,
        options: {} as DaterangeOptions
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange/v3';
    import { DaterangeSelection } from '@ironsource/fusion-ui/components/daterange/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px; width: 250px;">
            <fusion-daterange
                [formControl]="formControl"
            ></fusion-daterange>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DaterangeModule],
    })
    export class FusionStoryWrapperComponent {
      formControl: FormControl<DaterangeSelection> = new FormControl();
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

// region WithTimeSelector
const CalendarTimeTemplate: StoryFn<DaterangeComponent> = (args: DaterangeComponent) => ({
    props: {...args},
    template: `<div style="height: 445px; width: 320px;">
        <fusion-daterange
            [formControl]="formControl"
            [options]="options"
        ></fusion-daterange>
</div>`
});

export const WithTimeSelector = {
    render: CalendarTimeTemplate,

    args: {
        formControl: new FormControl() as FormControl<DaterangeSelection>,
        options: {withTimeSelect: true} as DaterangeOptions
    },

    parameters: {
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
      options: DaterangeOptions = {withTimeSelect: true};
      formControl: FormControl<DaterangeSelection> = new FormControl();
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithTimeSelectorPreselected = {
    render: CalendarTimeTemplate,

    args: {
        formControl: new FormControl({
            startDate: DAYS_AGO_3,
            endDate: TODAY,
            startTime: '12:34',
            endTime: '18:55'
        }) as FormControl<DaterangeSelection>,
        options: {withTimeSelect: true} as DaterangeOptions
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange/v3';
    import { DaterangeSelection, DaterangeOptions } from '@ironsource/fusion-ui/components/daterange/entities';

    const TODAY: Date = new Date();
    const DAYS_AGO_3: Date = new Date(TODAY);
    DAYS_AGO_3.setDate(TODAY.getDate() - 2);
    const PRE_SET_OBJECT = {
      startDate: DAYS_AGO_3,
      endDate: TODAY,
      startTime: '12:34',
      endTime: '18:55',
    };


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
      options: DaterangeOptions = {withTimeSelect: true};
      formControl: FormControl<DaterangeSelection> = new FormControl(PRE_SET_OBJECT);
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithoutPresets = {
    render: CalendarTemplate,

    args: {
        formControl: new FormControl() as FormControl<DaterangeSelection>,
        options: {
            presets: []
        } as DaterangeOptions
    },

    parameters: {
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
      options: DaterangeOptions = {
            presets: []
      };
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithCustomPresets = {
    render: CalendarTemplate,

    args: {
        formControl: new FormControl() as FormControl<DaterangeSelection>,
        options: {
            presets: [CUSTOM_PRESET_LAST_3_DAYS]
        } as DaterangeOptions
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange/v3';
    import {
      DaterangeSelection,
      DaterangeOptions,
      DaterangeCustomPreset,
    } from '@ironsource/fusion-ui/components/daterange/entities';

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
      options: DaterangeOptions = {
        presets: [CUSTOM_PRESET_LAST_3_DAYS],
      };
    }

    const TODAY: Date = new Date();
    const DAYS_AGO_3: Date = new Date(TODAY);
    DAYS_AGO_3.setDate(TODAY.getDate() - 2);

    const CUSTOM_PRESET_LAST_3_DAYS: DaterangeCustomPreset = {
      label: 'Last 3 days',
      startDate: DAYS_AGO_3,
      endDate: TODAY,
    };
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
