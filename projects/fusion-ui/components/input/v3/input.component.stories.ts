import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

import {InputComponent} from './input.component';
import {TooltipModule} from '../../tooltip/v3/tooltip.module';

const inputFormControl = new FormControl('');

export default {
    title: 'Components/Inputs/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            declarations: [InputComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TooltipModule
            ]
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
    template: `<div style="width: 300px;">
    <fusion-input [helperText]="helperText" [fusionTooltip]="tooltipContent" [placeholder]="placeholder" [formControl]="formControl"></fusion-input>
</div>`
});

export const Default = InputTemplate.bind({});
Default.args = {
    formControl: inputFormControl
};
