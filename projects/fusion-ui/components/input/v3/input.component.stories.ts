import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

import {InputComponent} from './input.component';

const inputFormControl = new FormControl('Some text');

export default {
    title: 'Components/Inputs/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            declarations: [InputComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    args: {
        placeholder: 'Input placeholder'
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<InputComponent>;

const InputTemplate: Story<InputComponent> = (args: InputComponent) => ({
    props: {...args},
    template: `<fusion-input [helperText]="helperText" [placeholder]="placeholder" [formControl]="formControl"></fusion-input>`
});

export const Default = InputTemplate.bind({});
Default.args = {
    formControl: inputFormControl
};
