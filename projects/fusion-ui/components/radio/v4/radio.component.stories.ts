import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {RadioComponent} from '@ironsource/fusion-ui/components/radio/v4/radio.component';

const radioLabel = 'Label';
const formControlSelected = new FormControl(true);
const formControlUnselected = new FormControl(false);

export default {
    title: 'V4/Components/Inputs/RadioButton',
    component: RadioComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                FlagModule,
                TooltipModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        label: radioLabel,
        disabled: false,
        formControl: formControlUnselected
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<RadioComponent>;

type Story = StoryObj<RadioComponent>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `
    <fusion-radio
        [label]="label"
        [disabled]="disabled"
        [formControl]="formControl"
    ></fusion-radio>
`
    })
};
