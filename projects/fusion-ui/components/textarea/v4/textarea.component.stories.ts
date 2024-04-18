import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from '@ironsource/fusion-ui/components/input';
import {TextareaV4Component} from '@ironsource/fusion-ui/components/textarea/v4/textarea-v4.component';

const formControlNoValue = new FormControl();

const formControlWithValue = new FormControl(
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
);

const meta: Meta<TextareaV4Component> = {
    title: 'V4/Components/Inputs/Textarea',
    component: TextareaV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export default meta;

const InputTemplate: StoryFn<InputComponent> = (args: InputComponent) => ({
    props: {...args},
    template: `<div style="width: 600px;">
    <fusion-textarea
        placeholder="Placeholder text"
        [isDisabled]="isDisabled"
        [readonly]="readonly"
        [resize]="resize"
        [error]="error"
        [helperText]="helperText"
        [formControl]="formControl"
    ></fusion-textarea>
</div>`
});

export const Default = {
    render: InputTemplate,
    args: {
        formControl: formControlNoValue
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from '@ironsource/fusion-ui/components/textarea/v3';
import { ButtonModule } from '@ironsource/fusion-ui/components/button';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 400px; margin: auto;" [formGroup]="customInputForm">
    <fusion-textarea placeholder="Enter your text" [formControlName]="textAreaFCName"></fusion-textarea>
    <br/>
    <br/>
    <fusion-button (click)="resetTextArea()">Reset Value</fusion-button>
  </div>\`,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TextareaModule,
  ],
})
export class FusionStoryWrapperComponent {
  constructor(private fb: FormBuilder) {}

  customInputForm = this.fb.group({
    textAreaFCName: ['Example Value'],
  });

  textAreaFCName = 'textAreaFCName';

  resetTextArea() {
    this.customInputForm.patchValue({
      textAreaFCName: 'Lorem ipsum dolor sit amet.',
    });
  }
}
`,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Disabled = {
    render: InputTemplate,
    args: {
        formControl: formControlWithValue,
        isDisabled: true
    }
};

export const ReadOnly = {
    render: InputTemplate,
    args: {
        formControl: formControlWithValue,
        readonly: true
    }
};

export const Resizable = {
    render: InputTemplate,
    args: {
        formControl: formControlWithValue,
        resize: true
    }
};

export const Error = {
    render: InputTemplate,
    args: {
        formControl: formControlWithValue,
        error: 'Error message'
    }
};

export const Helper = {
    render: InputTemplate,
    args: {
        formControl: formControlWithValue,
        helperText: 'Helper text'
    }
};
