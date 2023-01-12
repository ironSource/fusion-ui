import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {ToggleComponent} from '@ironsource/fusion-ui/components/toggle';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

const formControlChecked = new FormControl(true);
const formControlCheckedDisabled = new FormControl({value: true, disabled: true});
const formControlUnchecked = new FormControl(false);
const formControlUncheckedDisabled = new FormControl({value: false, disabled: true});

export default {
    title: 'Components/Toggle',
    component: ToggleComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**ToggleComponent component**`
            }
        }
    },
    args: {
        label: '',
        error: '',
        helper: ''
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<ToggleComponent>;

const TooltipTemplate: Story<ToggleComponent> = (args: ToggleComponent) => ({
    props: {...args},
    template: `<fusion-toggle
    [formControl]="formControl"
    [disabled]="disabled"
    [error]="error"
    [helper]="helper"
    >{{label}}</fusion-toggle>`
});

// region Default
export const Default = TooltipTemplate.bind({});
Default.args = {
    formControl: formControlUnchecked
};
/*Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<fusion-toggle
    [formControl]="formControl"
    >{{label}}</fusion-toggle>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
})
export class FusionStoryWrapperComponent {
  tooltipText = 'Well done! You successfully read this alert message';
}
`,
            format: true,
            type: 'code'
        }
    }
};*/
// endregion

// region Checked
export const Checked = TooltipTemplate.bind({});
Checked.args = {
    formControl: formControlChecked
};
// endregion

// region DisabledUnchecked
export const DisabledUnchecked = TooltipTemplate.bind({});
DisabledUnchecked.args = {
    formControl: formControlUncheckedDisabled
};
// endregion

// region DisabledChecked
export const DisabledChecked = TooltipTemplate.bind({});
DisabledChecked.args = {
    formControl: formControlCheckedDisabled
};
// endregion

// region WithLabel
export const WithLabel = TooltipTemplate.bind({});
WithLabel.args = {
    formControl: formControlUnchecked,
    label: 'Item name'
};
// endregion

// region WithLabelChecked
export const WithLabelChecked = TooltipTemplate.bind({});
WithLabelChecked.args = {
    formControl: formControlChecked,
    label: 'Item name'
};
// endregion

// region WithLabelDisabled
export const WithLabelDisabled = TooltipTemplate.bind({});
WithLabelDisabled.args = {
    formControl: formControlUncheckedDisabled,
    label: 'Item name'
};
// endregion

// region WithLabelCheckedDisabled
export const WithLabelCheckedDisabled = TooltipTemplate.bind({});
WithLabelCheckedDisabled.args = {
    formControl: formControlCheckedDisabled,
    label: 'Item name'
};
// endregion

// region WithLabelHelperText
export const WithLabelHelperText = TooltipTemplate.bind({});
WithLabelHelperText.args = {
    formControl: formControlChecked,
    label: 'Item name',
    helper: 'Helper text'
};
// endregion

// region WithLabelErrorText
export const WithLabelErrorText = TooltipTemplate.bind({});
WithLabelErrorText.args = {
    formControl: formControlChecked,
    label: 'Item name',
    error: 'Error text'
};
// endregion
