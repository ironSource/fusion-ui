import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonLoadingModule} from '@ironsource/fusion-ui/components/button/v3/components/button-loading/button-loading.module';
import {ButtonComponent} from './button.component';

export default {
    title: 'Components/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ButtonLoadingModule]
        })
    ],
    argTypes: {
        disabled: {
            control: 'boolean',
            defaultValue: false
        },
        loading: {
            control: 'boolean',
            defaultValue: false
        },
        link: {
            control: 'boolean',
            defaultValue: false
        }
    }
} as Meta<ButtonComponent>;

const ButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `<fusion-button [disabled]="disabled" [loading]="loading" [link]="link">label</fusion-button>`
});

export const Default = ButtonTemplate.bind({});
