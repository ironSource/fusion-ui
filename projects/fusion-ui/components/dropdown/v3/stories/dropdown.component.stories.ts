import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '../dropdown.component';
import {DropdownModule} from '../dropdown.module';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MOCK_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message';
import {DropdownCustomPlaceholderModule} from '../../../../../fusion-docs/src/app/components/dropdown-custom-placeholder/dropdown-custom-placeholder.module';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

const dropdownFormControl = new FormControl([]);

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
                DropdownModule,
                MultiDropdownModule,
                ErrorMessageModule,
                DropdownCustomPlaceholderModule
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
        formControl: dropdownFormControl,
        options: MOCK_OPTIONS,
        placeholder: 'Select one'
    },
    argTypes: {
        formControl: {
            control: false
        },
        placeholder: {
            control: 'text'
        }
    }
} as Meta<DropdownComponent>;

const DropdownTemplate: Story<DropdownComponent> = (args: DropdownComponent) => ({
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
     ></fusion-dropdown>
</div>`
});

// region Default
export const Default = DropdownTemplate.bind({});
Default.args = {
    formControl: dropdownFormControl
};
Default.parameters = {
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
};
// endregion

// region Small
export const Small = DropdownTemplate.bind({});
Small.args = {
    formControl: dropdownFormControl,
    sizeSmall: true
};
Small.parameters = {
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
};
// endregion

// region Disabled
export const Disabled = DropdownTemplate.bind({});
Disabled.args = {
    formControl: dropdownFormControl,
    isDisabled: true
};
Disabled.parameters = {
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
};
// endregion

// region Readonly
export const Readonly = DropdownTemplate.bind({});
Readonly.args = {
    formControl: dropdownFormControl,
    readonly: true
};
Readonly.parameters = {
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
};
// endregion

// region Search
export const Search = DropdownTemplate.bind({});
Search.args = {
    formControl: dropdownFormControl,
    search: true
};
Search.parameters = {
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
};
// endregion

// region Error
export const Error = DropdownTemplate.bind({});
Error.args = {
    formControl: dropdownFormControl,
    error: 'Error text.'
};
Error.parameters = {
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
};
// endregion

// region Helper
export const Helper = DropdownTemplate.bind({});
Helper.args = {
    formControl: dropdownFormControl,
    helper: 'Helper text.'
};
Helper.parameters = {
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
};
// endregion
