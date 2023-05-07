import {StoryFn, Meta, moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '../dropdown.component';
import {DropdownModule} from '../dropdown.module';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MOCK_ICON_OPTIONS,
    MOCK_OPTIONS,
    MOCK_OPTIONS_COUNTRIES,
    MOCK_OPTIONS_DISABLED,
    MOCK_OPTIONS_GROUPED,
    MOCK_OPTIONS_IMAGE,
    MOCK_OPTIONS_IMAGE_ICONS,
    MOCK_OPTIONS_IMAGE_ICONS_SUBTITLE,
    MOCK_OPTIONS_TWO_LINES
} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

export default {
    title: 'Components/Dropdown',
    component: DropdownComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownModule
            ],
            providers: [{provide: ApiBase, useExisting: DropdownComponent}]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5208%3A106031&t=1VJVOxcrIRM8BH92-1'
        },
        docs: {
            description: {
                component: dedent`**Dropdowns** Dropdowns showcase a list of options that allow users to make single or multiple selections. An option that’s been selected can represent a corresponding value in forms or be used to filter/sort content.`
            }
        }
    },
    args: {
        options: MOCK_OPTIONS,
        placeholder: 'Select one',
        optionCloseIcon: false,
        loading: false,
        autoComplete: false
    },
    argTypes: {
        formControl: {
            control: false
        },
        autoComplete: {
            control: false
        },
        loading: {
            control: false
        },
        placeholder: {
            control: 'text'
        }
    }
} as Meta<DropdownComponent>;

const DropdownTemplate: StoryFn<DropdownComponent> = (args: DropdownComponent) => ({
    props: {...args},
    template: `<div style="height: 300px; width: 250px; margin: auto">
<fusion-dropdown
     [class.small]="sizeSmall"
     [class.readonly]="readonly"
     [placeholder]="placeholder"
     [formControl]="formControl"
     [options]="options"
     [search]="search"
     [isDisabled]="isDisabled"
     [error]="error"
     [helper]="helper"
     [optionCloseIcon]="optionCloseIcon"
     [loading]="loading"
     [autoComplete]="autoComplete"
     ></fusion-dropdown>
</div>`
});

export const Default = {
    render: DropdownTemplate,

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
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
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

export const Loading = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        loading: true,
        autoComplete: true,
        options: []
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         [loading]="loading"
         [autoComplete]="autoComplete"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = [];
        loading = true;
        autoComplete = true;
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Small = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        sizeSmall: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown
         class="small"
         [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
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

export const DisabledOption = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: MOCK_OPTIONS_DISABLED
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_DISABLED)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Disabled = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        isDisabled: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown
         [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         [isDisabled]="disabled"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        disabled = true;
        placeholder = 'Select one';
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

export const Readonly = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        readonly: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown
         [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         [class.readonly]="readonly"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        readonly = true;
        placeholder = 'Select one';
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

export const Search = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        search: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown
        [placeholder]="placeholder"
        [formControl]="dropdownFormControl"
        [options]="options"
        [search]="search"
        ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        search = true;
        placeholder = 'Select one';
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

export const Error = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        error: 'Error text.'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown
        [placeholder]="placeholder"
        [formControl]="dropdownFormControl"
        [options]="options"
        [error]="errorMessage"
        ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        errorMessage = 'Error text';
        placeholder = 'Select one';
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

export const Helper = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        helper: 'Helper text.'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown
        [placeholder]="placeholder"
        [formControl]="dropdownFormControl"
        [options]="options"
        [helper]="helperText"
        ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        helperText = 'Helper text';
        placeholder = 'Select one';
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

export const WithIcon = {
    render: DropdownTemplate,

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
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_ICON_OPTIONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithFlag = {
    render: DropdownTemplate,

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
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
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
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: MOCK_OPTIONS_IMAGE_ICONS
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_IMAGE_ICONS)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithImage = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: MOCK_OPTIONS_IMAGE
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_IMAGE)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const TwoLines = {
    render: DropdownTemplate,

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
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_TWO_LINES)}
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

// region GruppedOptions
const DropdownGruppedTemplate: StoryFn<DropdownComponent> = (args: DropdownComponent) => ({
    props: {...args},
    template: `<div style="height: 300px; width: 250px; margin: auto">
<fusion-dropdown
     [placeholder]="placeholder"
     [formControl]="formControl"
     [optionsGroups]="optionsGroups"
     ></fusion-dropdown>
</div>`
});

export const GruppedOptions = {
    render: DropdownGruppedTemplate,

    args: {
        formControl: new FormControl([]),
        optionsGroups: MOCK_OPTIONS_GROUPED,
        options: undefined
    },

    argTypes: {
        options: {
            control: false
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [optionsGroups]="optionsGroups"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        optionsGroups: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_GROUPED)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithClearButton = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        optionCloseIcon: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
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

export const WithAll = {
    render: DropdownTemplate,

    args: {
        formControl: new FormControl([]),
        options: MOCK_OPTIONS_IMAGE_ICONS_SUBTITLE,
        optionCloseIcon: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 300px; width: 250px; margin: auto">
      <fusion-dropdown [placeholder]="placeholder"
         [formControl]="dropdownFormControl"
         [options]="options"
         ></fusion-dropdown>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, DropdownModule],
    })
    export class FusionStoryWrapperComponent {
        placeholder = 'Select one';
        dropdownFormControl = new FormControl();
        options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_IMAGE_ICONS_SUBTITLE)};
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
