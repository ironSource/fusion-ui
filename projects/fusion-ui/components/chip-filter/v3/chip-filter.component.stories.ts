import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipFilterComponent, ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {MOCK_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';

export default {
    title: 'Components/Filters/Filter (Chip)',
    component: ChipFilterComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                ChipFilterModule,
                DropdownModule,
                DaterangeModule,
                DropdownDualMultiSelectModule
            ]
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
                component: dedent`**Chip** Chips are compact little units that represent actions, filters or choices. When shown, they allow users to prompt actions, filter content and choose options.`
            }
        }
    },
    args: {
        placeholder: 'Chip filter',
        options: MOCK_OPTIONS,
        title: 'Label'
    },
    argTypes: {
        formControl: {
            control: false
        },
        fcDateRange: {
            control: false
        }
    }
} as Meta<ChipFilterComponent>;

const ChipFilterTemplate: StoryFn<ChipFilterComponent> = (args: ChipFilterComponent) => ({
    props: {...args},
    template: `<div style="height: 250px;">
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
            <fusion-dropdown
                 [title]="title"
                 [placeholderPrefix]="placeholderPrefix"
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 [optionsTitle]="optionsTitle"
                 [search]="search"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>`
});

export const Default = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {mode: 'static', close: true}
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        formControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithRightAndLeftIcons = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {
            mode: 'static',
            close: true,
            leftIcon: {icon: 'frame', tooltipText: 'This is LEFT icon'},
            rightIcon: {icon: 'info', tooltipText: 'This is RIGHT icon'}
        } as ChipFilterComponentConfigurations
    }
};

export const Disabled = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {mode: 'static', close: true, disabled: true}
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true, disabled: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        formControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DisabledWithRightAndLeftIcons = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {
            mode: 'static',
            close: true,
            disabled: true,
            leftIcon: {icon: 'frame', tooltipText: 'This is LEFT icon'},
            rightIcon: {icon: 'info', tooltipText: 'This is RIGHT icon'}
        } as ChipFilterComponentConfigurations
    }
};

export const Selected = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(MOCK_OPTIONS[1]),
        configuration: {mode: 'static', close: true}
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
        formControl = new FormControl(this.options[1]);
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const SelectedUnremovable = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(MOCK_OPTIONS[1]),
        configuration: {mode: 'static', close: false}
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: false }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
        formControl = new FormControl(this.options[1]);
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const SelectedUnremovableDisabled = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(MOCK_OPTIONS[1]),
        configuration: {mode: 'static', close: false, disabled: true}
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: false, disabled: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
        formControl = new FormControl(this.options[1]);
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DropdownWithLabel = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {mode: 'static', close: true},
        placeholderPrefix: 'Label'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholderPrefix]="placeholderPrefix"
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholderPrefix = 'Label'
        placeholder = 'Chip filter';
        formControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DropdownWithOptionsTitle = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {mode: 'static', close: true},
        optionsTitle: 'Title'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        formControl = new FormControl();
        optionsTitle = 'Title'
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DropdownWithOptionsTitleAndSearch = {
    render: ChipFilterTemplate,

    args: {
        formControl: new FormControl(),
        configuration: {mode: 'static', close: true},
        optionsTitle: 'Title',
        search: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px; margin: auto">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
            <div class="filter-element">
                <fusion-dropdown
                     [placeholder]="placeholder"
                     [formControl]="formControl"
                     [options]="options"
                     [optionsTitle]="optionsTitle"
                     [search]="search"
                     >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Chip filter';
        formControl = new FormControl();
        optionsTitle = 'Title'
        search = true;
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

// region DateRangeWithIcon
const ChipFilterIconTemplate: StoryFn<ChipFilterComponent> = (args: ChipFilterComponent) => ({
    props: {...args},
    template: `<div style="height: 350px;">
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
            <fusion-daterange [options]="dateRangeOptions" [formControl]="fcDateRange"> </fusion-daterange>
        </div>
    </fusion-chip-filter>
</div>`
});

export const DateRangeWithIcon = {
    render: ChipFilterIconTemplate,

    args: {
        configuration: {mode: 'static', close: true, maxWidth: 300},
        dateRangeOptions: {chipLabel: 'Date range', placeholder: 'All'},
        fcDateRange: new FormControl()
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
    import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 250px; width: 250px;">
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true, maxWidth: 300}">
            <div class="filter-element">
                <fusion-daterange [options]="{ chipLabel: 'Date range', placeholder: 'All' }" [formControl]="fcDateRange"> </fusion-daterange>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DaterangeModule],
    })
    export class FusionStoryWrapperComponent {
      fcDateRange = new FormControl();
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

// region IncludeExcludeWithLabel
const ChipFilterIncludeExcludeTemplate: StoryFn<ChipFilterComponent> = (args: ChipFilterComponent) => ({
    props: {...args},
    template: `<div style="height: 350px; width: 250px;">
    <fusion-chip-filter [configuration]="configuration" [testId]="testId">
        <div class="filter-element">
             <fusion-dropdown-dual-multi-select
                [title]="title"
                [placeholder]="placeholder"
                [formControl]="formControl"
                [items]="items"
                [testId]="testId"
             ></fusion-dropdown-dual-multi-select>
        </div>
    </fusion-chip-filter>
</div>`
});

export const IncludeExcludeWithLabel = {
    render: ChipFilterIncludeExcludeTemplate,

    args: {
        formControl: new FormControl([]),
        items: [...MOCK_OPTIONS],
        configuration: {mode: 'static', close: true}
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
    import {DropdownDualMultiSelectModule} from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div>
        <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true, maxWidth: 300}">
            <div class="filter-element">
                <fusion-dropdown-dual-multi-select
                    [title]="title"
                    [placeholder]="placeholder"
                    [formControl]="formControl"
                    [items]="items"
                ></fusion-dropdown-dual-multi-select>
            </div>
        </fusion-chip-filter>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, ChipFilterModule, DropdownDualMultiSelectModule],
    })
    export class FusionStoryWrapperComponent {
        title = 'Label';
        placeholder = 'Chip filter';
        formControl = new FormControl();
        items: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
