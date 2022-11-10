import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
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
        type: {
            options: ['info', 'success', 'warning', 'error'],
            control: {type: 'select'},
            defaultValue: 'info'
        },
        mode: {
            control: false
        }
    }
} as Meta<AlertComponent>;

const AlertTemplate: Story<AlertComponent> = (args: AlertComponent) => ({
    props: args,
    template: `<fusion-alert [type]="type" [showCloseButton]="showCloseButton" [showDoNotShowAgainButton]="showDoNotShowAgainButton"><strong>Heads up!</strong> This alert content example.</fusion-alert>`
});

const AlertSmallTemplate: Story<AlertComponent> = (args: AlertComponent) => ({
    props: args,
    template: `<fusion-alert class="small" [type]="type" [showCloseButton]="showCloseButton" [showDoNotShowAgainButton]="showDoNotShowAgainButton"><strong>Heads up!</strong> This alert content example. &nbsp;</fusion-alert>`
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

export const Small = AlertSmallTemplate.bind({});
export const SmallSuccess = AlertSmallTemplate.bind({});
SmallSuccess.args = {
    type: 'success'
};
export const SmallWarning = AlertSmallTemplate.bind({});
SmallWarning.args = {
    type: 'warning'
};
export const SmallError = AlertSmallTemplate.bind({});
SmallError.args = {
    type: 'error'
};

export const NoCloseButton = AlertTemplate.bind({});
NoCloseButton.args = {
    showCloseButton: false
};

export const NotShowAgainButton = AlertTemplate.bind({});
NotShowAgainButton.args = {
    showDoNotShowAgainButton: true
};
