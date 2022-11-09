import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '../../svg';
import {IconModule} from '../../icon/v1';
import {AlertComponent} from './alert.component';

export default {
    title: 'Components/Alert',
    component: AlertComponent,
    decorators: [
        moduleMetadata({
            declarations: [AlertComponent],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    argTypes: {
        mode: {
            control: false
        }
    }
} as Meta;

const AlertTemplate: Story<AlertComponent> = (args: AlertComponent) => ({
    props: args,
    template: `<fusion-alert [type]="type" [showCloseButton]="showCloseButton" [showDoNotShowAgainButton]="showDoNotShowAgainButton"><strong>Heads up!</strong> This alert content example. </fusion-alert>`
});

export const Default = AlertTemplate.bind({});

export const Success = AlertTemplate.bind({});
Success.args = {
    type: 'success'
};

export const Warning = AlertTemplate.bind({});
Warning.args = {
    type: 'warning'
};

export const Error = AlertTemplate.bind({});
Error.args = {
    type: 'error'
};

export const Small = AlertTemplate.bind({});
Small.template = `<fusion-alert class="small" [type]="type" [showCloseButton]="showCloseButton" [showDoNotShowAgainButton]="showDoNotShowAgainButton"><strong>Heads up!</strong> This alert content example. </fusion-alert>`;
