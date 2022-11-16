import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadioGroupComponent} from './radio-group.component';
import {RadioModule} from '../../radio/v3/radio.module';
import {RadioGroupOptions} from '../common/entities/radio-group.entities';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

// region mocking
const radioGroupOptions: RadioGroupOptions[] = [
    {id: 1, label: 'test'},
    {id: 2, label: 'hello'},
    {id: 3, label: 'world'}
];
const formControlSelectedOption = new FormControl(radioGroupOptions[0]);

const radioGroupIconOptions: RadioGroupOptions[] = [
    {id: 1, label: 'banner', icon: 'banner'},
    {id: 2, label: 'reworded video', icon: 'reworded-video'},
    {id: 3, label: 'offer wall', icon: 'offerwall'}
];
const formControlSelectedIconOption = new FormControl(radioGroupIconOptions[0]);

const radioGroupDisabledOptions: RadioGroupOptions[] = [
    {id: 1, label: 'test'},
    {id: 2, label: 'hello', disabled: true},
    {id: 3, label: 'world'}
];
const formControlSelectedDisabledOption = new FormControl(radioGroupDisabledOptions[0]);

const radioGroupLongLabelOptions: RadioGroupOptions[] = [
    {
        id: 1,
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {id: 2, label: 'Lorem ipsum dolor sit amet'}
];
const formControlSelectedLongLabelOption = new FormControl(radioGroupLongLabelOptions[0]);
// endregion

export default {
    title: 'Components/Inputs/Radio',
    component: RadioGroupComponent,
    decorators: [
        moduleMetadata({
            declarations: [RadioGroupComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                RadioModule
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5470%3A99393'
        }
    },
    args: {
        options: radioGroupOptions
    },
    argTypes: {
        name: {
            control: false
        },
        formControl: {
            control: false
        }
    }
};

const RadioGroupTemplate: Story<RadioGroupComponent> = (args: RadioGroupComponent) => ({
    props: {...args},
    template: `<div style="width: 300px;"><fusion-radio-group
    [inline]="inline"
    [isDisabled]="isDisabled"
    [options]="options"
    [formControl]="formControl"
></fusion-radio-group></div>`
});

export const Default = RadioGroupTemplate.bind({});
Default.args = {
    formControl: formControlSelectedOption
};
export const Row = RadioGroupTemplate.bind({});
Row.args = {
    inline: true,
    formControl: formControlSelectedOption
};
export const Disabled = RadioGroupTemplate.bind({});
Disabled.args = {
    isDisabled: true,
    formControl: formControlSelectedOption
};

export const DisabledOption = RadioGroupTemplate.bind({});
DisabledOption.args = {
    options: radioGroupDisabledOptions,
    formControl: formControlSelectedDisabledOption
};

export const IconOptions = RadioGroupTemplate.bind({});
IconOptions.args = {
    options: radioGroupIconOptions,
    formControl: formControlSelectedIconOption
};

/*export const LongLabel = RadioGroupTemplate.bind({});
LongLabel.args = {
    options: radioGroupLongLabelOptions,
    formControl: formControlSelectedLongLabelOption
}*/
