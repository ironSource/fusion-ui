import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiDropdownComponent, MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {MOCK_OPTIONS} from './multi-dropdown.mock';
import {MOK_APPLICATIONS_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

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
            providers: [{provide: ApiBase, useExisting: MultiDropdownComponent}]
        })
    ],
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

const MultiDropdownTemplate: Story<MultiDropdownComponent> = (args: MultiDropdownComponent) => ({
    props: {...args},
    template: `<div style="height: 310px; width: 250px; margin: auto">
    <fusion-multi-dropdown
        [placeholder]="placeholder"
        [formControl]="formControl"
        [options]="options"
        [confirm]="confirm"
        [selectAllLabel]="selectAllLabel"
    ></fusion-multi-dropdown>
</div>`
});

// region Default
export const Default = MultiDropdownTemplate.bind({});
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
    options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    confirm: false
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region WithConfirm
export const WithConfirm = MultiDropdownTemplate.bind({});
WithConfirm.args = {
    formControl: new FormControl([]),
    confirm: true
};
WithConfirm.parameters = {
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
};
// endregion

// region WithSelectAll
export const WithSelectAll = MultiDropdownTemplate.bind({});
WithSelectAll.args = {
    formControl: new FormControl([]),
    selectAllLabel: 'Select all'
};
WithSelectAll.parameters = {
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
};
// endregion

// region WithSubtitle
export const WithSubtitle = MultiDropdownTemplate.bind({});
WithSubtitle.args = {
    formControl: new FormControl([]),
    options: [...MOK_APPLICATIONS_OPTIONS].slice(0, 3).map(item => {
        return {id: item.id, displayText: item.displayText, subText: item.subText};
    })
};
WithSubtitle.parameters = {
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
    options: DropdownOption[] = ${JSON.stringify(
        [...MOK_APPLICATIONS_OPTIONS].slice(0, 3).map(item => {
            return {id: item.id, displayText: item.displayText, subText: item.subText};
        })
    )};
    confirm: false
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion
