import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {MOCK_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {MultiDropdownComponent} from '@ironsource/fusion-ui/components/multi-dropdown/v4';
import {ChipFilterButtonComponent} from './chip-filter-button.component';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange/v3';

const MOCK_OPTIONS_TYPE: DropdownOption[] = [
    {
        id: 1,
        displayText: 'Spend'
    },
    {
        id: 2,
        displayText: 'Installs'
    },
    {
        id: 3,
        displayText: 'eCPI'
    }
];
const MOCK_OPTIONS_PERIOD: DropdownOption[] = [
    {
        id: 1,
        displayText: 'Yesterday vs. same day last week'
    },
    {
        id: 2,
        displayText: 'Last 7 days vs. previous 7 days'
    },
    {
        id: 3,
        displayText: 'Last 14 days vs. previous 14 days'
    },
    {
        id: 4,
        displayText: 'Last 30 days vs. previous 30 days'
    }
];

const baseTemplate = `
    <fusion-chip-filter-button [showCaretIcon]="showCaretIcon" [size]="size" [weight]="weight" [configuration]="configuration">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholderPrefix]="placeholderPrefix"
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 [optionsTitle]="optionsTitle"
                 [search]="search"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter-button>
`;
const baseTemplateMultiselect = `
    <fusion-chip-filter-button [size]="size" [weight]="weight" [configuration]="configuration">
        <div class="filter-element">
            <fusion-multi-dropdown
                [placeholder]="placeholder"
                [formControl]="formControl"
                [options]="options"
            ></fusion-multi-dropdown>
        </div>
    </fusion-chip-filter-button>
`;

export default {
    title: 'V4/Components/Dropdown/Triggers/Button',
    component: ChipFilterButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownComponent,
                MultiDropdownComponent,
                DaterangeModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***ChipTriggerComponent***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Select',
        options: MOCK_OPTIONS,
        configuration: {id: 1, mode: 'static', close: true},
        size: 'medium',
        weight: 'light'
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<ChipFilterButtonComponent>;

type Story = StoryObj<ChipFilterButtonComponent>;

export const Default: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            options: MOCK_OPTIONS_TYPE
        },
        template: baseTemplate
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 300px; height: 150px;">${story}</div>`)]
};

export const Disabled: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            configuration: {id: 1, mode: 'static', close: true, disabled: true}
        },
        template: baseTemplate
    })
};

export const Multiselect: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl()
        },
        template: baseTemplateMultiselect
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)]
};

export const WithIconLeft: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            configuration: {id: 1, mode: 'static', close: true, leftIcon: {icon: 'ph/calendar-blank'}}
        },
        template: baseTemplate
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)]
};

export const WithoutCaretIcon: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            showCaretIcon: false,
            configuration: {id: 1, mode: 'static', close: true, leftIcon: {icon: 'ph/calendar-blank'}}
        },
        template: baseTemplate
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)]
};

export const Sizes: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            configuration: {id: 1, mode: 'static'}
        },
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-chip-filter-button [weight]="weight" [configuration]="configuration">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="Medium"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>

        <fusion-chip-filter-button size="small" [weight]="weight" [configuration]="configuration">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="Small"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>
</div>
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)]
};

export const Weight: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            configuration: {id: 1, mode: 'static'}
        },
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-chip-filter-button [configuration]="configuration">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="Light"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>
        
        <fusion-chip-filter-button weight="bold" [configuration]="configuration">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="Bold"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>
</div>
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)]
};

export const Icon: Story = {
    render: args => ({
        props: {
            ...args,
            formControl: new FormControl(),
            configuration: {id: 1, mode: 'static'}
        },
        template: `
<div style="display: flex; gap: 16px;">
        <fusion-chip-filter-button [showCaretIcon]="false" [weight]="weight" [configuration]="configuration">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="No icons"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>

        <fusion-chip-filter-button [showCaretIcon]="false" [weight]="weight" [configuration]="{id: 2, mode: 'static', leftIcon: {icon: 'ph/calendar-blank'}}">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="With start icon"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>
        
        <fusion-chip-filter-button [weight]="weight" [configuration]="{id: 2, mode: 'static', close: true}">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="With caret icon (default)"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>

        <fusion-chip-filter-button [weight]="weight" [configuration]="{id: 2, mode: 'static', close: true, leftIcon: {icon: 'ph/calendar-blank'}}">
            <div class="filter-element">
                <fusion-dropdown
                     placeholder="With both icon"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter-button>
    </div>
`
    }),
    decorators: [componentWrapperDecorator(story => `<div style="width: 800px; height: 350px;">${story}</div>`)]
};

export const DatePeriodPicker: Story = {
    render: args => ({
        props: {
            ...args,
            options: MOCK_OPTIONS_PERIOD,
            formControl: new FormControl([MOCK_OPTIONS_PERIOD[1]]),
            configuration: {id: 1, mode: 'static', close: true, leftIcon: {icon: 'ph/calendar-blank'}}
        },
        template: baseTemplate
    }),
    decorators: [componentWrapperDecorator(story => `<div style="height: 200px;">${story}</div>`)]
};
