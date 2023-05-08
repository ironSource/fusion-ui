import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiDropdownComponent, MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {
    MOCK_ICON_OPTIONS,
    MOCK_OPTIONS,
    MOCK_OPTIONS_COUNTRIES,
    MOCK_OPTIONS_IMAGE_ICONS,
    MOCK_OPTIONS_TWO_LINES
} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {ApiService} from '@ironsource/fusion-ui';

export default {
    title: 'Components/Dropdown/Multiselect',
    component: MultiDropdownComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                MultiDropdownModule
            ],
            providers: [{provide: ApiBase, useExisting: MultiDropdownComponent}, ApiService]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5208%3A106031&t=1VJVOxcrIRM8BH92-1'
        },
        docs: {
            description: {
                component: dedent`**Multi-Select Dropdowns** Dropdowns showcase a list of options that allow users to make multiple selections.`
            }
        }
    },
    args: {
        options: MOCK_OPTIONS,
        placeholder: 'Please select',
        confirm: false
    },
    argTypes: {
        formControl: {
            control: false
        },
        placeholder: {
            control: 'text'
        }
    }
} as Meta<MultiDropdownComponent>;

const MultiDropdownTemplate: StoryFn<MultiDropdownComponent> = (args: MultiDropdownComponent) => ({
    props: {...args},
    template: `<div style="height: 310px; width: 250px; margin: auto">
    <fusion-multi-dropdown
        [placeholder]="placeholder"
        [formControl]="formControl"
        [options]="options"
        [confirm]="confirm"
        [search]="search"
        [selectAllLabel]="selectAllLabel"
    ></fusion-multi-dropdown>
</div>`
});

export const Default = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([])
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithConfirm = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        confirm: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
            [confirm]="true"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithSelectAll = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        selectAllLabel: 'Select all'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
            [confirm]="false"
            selectAllLabel="Select All"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const TwoLines = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: MOCK_OPTIONS_TWO_LINES
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
            [confirm]="confirm"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_TWO_LINES)};
        confirm: false
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithIcon = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: [...MOCK_ICON_OPTIONS]
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
                import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_ICON_OPTIONS)};
    }`,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithFlag = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: [...MOCK_OPTIONS_COUNTRIES]
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_COUNTRIES)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithImageAndIcon = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: MOCK_OPTIONS_IMAGE_ICONS
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_IMAGE_ICONS)};
    }`,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Search = {
    render: MultiDropdownTemplate,

    args: {
        formControl: new FormControl([]),
        search: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { MultiDropdownModule } from "@ironsource/fusion-ui/components/multi-dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
        <fusion-multi-dropdown
            [placeholder]="placeholder"
            [formControl]="dropdownFormControl"
            [options]="options"
            [search]="search"
        ></fusion-multi-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, MultiDropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select items';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
        search: true
    }`,
                format: true,
                type: 'code'
            }
        }
    }
};
