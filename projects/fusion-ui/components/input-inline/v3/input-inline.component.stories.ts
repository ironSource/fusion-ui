import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ClickOutsideModule} from '@ironsource/fusion-ui';
import {InlineInputType, InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline';
import {CurrencyPipeParameters} from '@ironsource/fusion-ui/components/input-inline/common/base';

export default {
    title: 'Components/Inputs/Input-Inline',
    component: InputInlineComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TooltipModule,
                ClickOutsideModule
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=12055%3A117675&t=qWZb5OCasX8xRRtF-1'
        }
    },
    args: {
        type: 0 as InlineInputType, // Text
        loading: false,
        readOnly: false,
        error: '',
        currencyPipeParameters: null as CurrencyPipeParameters
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<InputInlineComponent>;

const InputTemplate: Story<InputInlineComponent> = (args: InputInlineComponent) => ({
    props: {...args},
    template: `<div style="width: 155px;">
<fusion-input-inline
    [type]="type"
    [formControl]="formControl"
    [loading]="loading"
    [error]="error"
    [readOnly]="readOnly"
    [currencyPipeParameters]="currencyPipeParameters"
    (onSave)="onSave($event)"
    (onCancel)="onCancel()"
></fusion-input-inline>
</div>`
});

export const Default = InputTemplate.bind({});
Default.args = {
    formControl: new FormControl('some text value')
};
