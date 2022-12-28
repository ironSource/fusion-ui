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
        optionCloseIcon: false
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
     [optionCloseIcon]="optionCloseIcon"
     ></fusion-dropdown>
</div>`
});

// region Default
export const Default = DropdownTemplate.bind({});
Default.args = {
    formControl: new FormControl([])
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
    formControl: new FormControl([]),
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

// region DisabledOption
export const DisabledOption = DropdownTemplate.bind({});
DisabledOption.args = {
    formControl: new FormControl([]),
    options: MOCK_OPTIONS_DISABLED
};
DisabledOption.parameters = {
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
};
// endregion

// region Disabled
export const Disabled = DropdownTemplate.bind({});
Disabled.args = {
    formControl: new FormControl([]),
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
    formControl: new FormControl([]),
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
    formControl: new FormControl([]),
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
    formControl: new FormControl([]),
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
    formControl: new FormControl([]),
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

// region WithIcon
export const WithIcon = DropdownTemplate.bind({});
WithIcon.args = {
    formControl: new FormControl([]),
    options: [...MOCK_ICON_OPTIONS]
};
WithIcon.parameters = {
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
};
// endregion

// region WithFlag
export const WithFlag = DropdownTemplate.bind({});
WithFlag.args = {
    formControl: new FormControl([]),
    options: [...MOCK_OPTIONS_COUNTRIES]
};
WithFlag.parameters = {
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
};
// endregion

// region WithImageAndIcon
export const WithImageAndIcon = DropdownTemplate.bind({});
WithImageAndIcon.args = {
    formControl: new FormControl([]),
    options: MOCK_OPTIONS_IMAGE_ICONS
};
WithImageAndIcon.parameters = {
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
};
// endregion

// region WithImage
export const WithImage = DropdownTemplate.bind({});
WithImage.args = {
    formControl: new FormControl([]),
    options: MOCK_OPTIONS_IMAGE
};
WithImage.parameters = {
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
};
// endregion

// region TwoLines
export const TwoLines = DropdownTemplate.bind({});
TwoLines.args = {
    formControl: new FormControl([]),
    options: MOCK_OPTIONS_TWO_LINES
};
TwoLines.parameters = {
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
};
// endregion

// region GruppedOptions
const DropdownGruppedTemplate: Story<DropdownComponent> = (args: DropdownComponent) => ({
    props: {...args},
    template: `<div style="height: 300px; width: 250px; margin: auto">
<fusion-dropdown
     [placeholder]="placeholder"
     [formControl]="formControl"
     [optionsGroups]="optionsGroups"
     ></fusion-dropdown>
</div>`
});
export const GruppedOptions = DropdownGruppedTemplate.bind({});
GruppedOptions.args = {
    formControl: new FormControl([]),
    optionsGroups: MOCK_OPTIONS_GROUPED,
    options: undefined
};
GruppedOptions.argTypes = {
    options: {
        control: false
    }
};
GruppedOptions.parameters = {
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
};
// endregion

// region WithClearButton
export const WithClearButton = DropdownTemplate.bind({});
WithClearButton.args = {
    formControl: new FormControl([]),
    optionCloseIcon: true
};
WithClearButton.parameters = {
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

// region WithAll
export const WithAll = DropdownTemplate.bind({});
WithAll.args = {
    formControl: new FormControl([]),
    options: MOCK_OPTIONS_IMAGE_ICONS_SUBTITLE,
    optionCloseIcon: true
};
WithAll.parameters = {
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
};
// endregion
