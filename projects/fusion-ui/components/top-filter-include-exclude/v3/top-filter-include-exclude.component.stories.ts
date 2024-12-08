import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopFilterIncludeExcludeComponent} from './top-filter-include-exclude.component';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

const meta: Meta<TopFilterIncludeExcludeComponent> = {
    title: 'V3/Components/Filters/Top Filter/Include-Exclude (combined)',
    component: TopFilterIncludeExcludeComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**Top Filter Trigger Component**`
            }
        }
    },
    tags: ['autodocs'],
    args: {
        placeholder: 'Select application'
    }
};
export default meta;

const DefaultTemplate: StoryFn<TopFilterIncludeExcludeComponent> = args => ({
    props: {...args},
    template: `<div style="height: 380px">
    <fusion-top-filter-include-exclude
        [placeholder]="placeholder"
        [error]="error"
        [required]="required"
        [loading]="loading"
        [title]="title"
        [items]="items"
        [formControl]="formControl"
    ></fusion-top-filter-include-exclude>
</div>`
});

export const Default = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl()
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';
    import { TopFilterIncludeExcludeComponent } from '@ironsource/fusion-ui/components/top-filter-include-exclude';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
  <fusion-top-filter-include-exclude
  [placeholder]="placeholder"
  [error]="error"
  [required]="required"
  [loading]="loading"
  [title]="title"
  [items]="items"
  [formControl]="formControl"
></fusion-top-filter-include-exclude>
</div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterIncludeExcludeComponent],
    })
    export class FusionStoryWrapperComponent {
        error: string;
        required: boolean;
        loading: boolean;
        title = 'Applications';
        placeholder = 'Select Application';
        formControl = new FormControl();
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const PreselectedOneItem = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl([MOK_APPLICATIONS_ONE_LINE_OPTIONS[2]])
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';
    import { TopFilterIncludeExcludeComponent } from '@ironsource/fusion-ui/components/top-filter-include-exclude';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
  <fusion-top-filter-include-exclude
  [placeholder]="placeholder"
  [error]="error"
  [required]="required"
  [loading]="loading"
  [title]="title"
  [items]="items"
  [formControl]="formControl"
></fusion-top-filter-include-exclude>
</div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterIncludeExcludeComponent],
    })
    export class FusionStoryWrapperComponent {
        error: string;
        required: boolean;
        loading: boolean;
        title = 'Applications';
        placeholder = 'Select Application';
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
        formControl = new FormControl(this.items.slice(2, 3));
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const PreselectedSomeItems = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(2, 6))
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';
    import { TopFilterIncludeExcludeComponent } from '@ironsource/fusion-ui/components/top-filter-include-exclude';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
  <fusion-top-filter-include-exclude
  [placeholder]="placeholder"
  [error]="error"
  [required]="required"
  [loading]="loading"
  [title]="title"
  [items]="items"
  [formControl]="formControl"
></fusion-top-filter-include-exclude>
</div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterIncludeExcludeComponent],
    })
    export class FusionStoryWrapperComponent {
        error: string;
        required: boolean;
        loading: boolean;
        title = 'Applications';
        placeholder = 'Select Application';
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
        formControl = new FormControl(this.items.slice(2, 6));
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Loading = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        loading: true
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';
    import { TopFilterIncludeExcludeComponent } from '@ironsource/fusion-ui/components/top-filter-include-exclude';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
  <fusion-top-filter-include-exclude
  [placeholder]="placeholder"
  [error]="error"
  [required]="required"
  [loading]="loading"
  [title]="title"
  [items]="items"
  [formControl]="formControl"
></fusion-top-filter-include-exclude>
</div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterIncludeExcludeComponent],
    })
    export class FusionStoryWrapperComponent {
        error: string;
        required: boolean;
        loading = true;
        title = 'Applications';
        placeholder = 'Select Application';
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
        formControl = new FormControl();
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Error = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        error: 'error message'
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';
    import { TopFilterIncludeExcludeComponent } from '@ironsource/fusion-ui/components/top-filter-include-exclude';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
  <fusion-top-filter-include-exclude
  [placeholder]="placeholder"
  [error]="error"
  [required]="required"
  [loading]="loading"
  [title]="title"
  [items]="items"
  [formControl]="formControl"
></fusion-top-filter-include-exclude>
</div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterIncludeExcludeComponent],
    })
    export class FusionStoryWrapperComponent {
        error = 'error message';
        required: boolean;
        loading: boolean;
        title = 'Applications';
        placeholder = 'Select Application';
        formControl = new FormControl();
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Required = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        required: true
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';
    import { TopFilterIncludeExcludeComponent } from '@ironsource/fusion-ui/components/top-filter-include-exclude';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
  <fusion-top-filter-include-exclude
  [placeholder]="placeholder"
  [error]="error"
  [required]="required"
  [loading]="loading"
  [title]="title"
  [items]="items"
  [formControl]="formControl"
></fusion-top-filter-include-exclude>
</div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterIncludeExcludeComponent],
    })
    export class FusionStoryWrapperComponent {
        error: string;
        required = true;
        loading: boolean;
        title = 'Applications';
        placeholder = 'Select Application';
        formControl = new FormControl();
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};
