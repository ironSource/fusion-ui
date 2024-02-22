import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ModalV4Component} from './modal-v4.component';

export default {
    title: 'V4/Components/Feedback/Dialog',
    component: ModalV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        },
        layout: 'centered'
    },
    args: {
        title: 'Title',
        content: 'This is a dialog that demonstrates the usage of the DialogTitle and DialogActions components!',
        secondaryButtonLabel: 'Cancel',
        primaryButtonLabel: 'Ok'
    }
} as Meta<ModalV4Component>;

type Story = StoryObj<ModalV4Component>;

export const Basic: Story = {};

export const HeaderDescription: Story = {};
HeaderDescription.args = {
    description: 'Description'
};

export const NoHeader: Story = {};
NoHeader.args = {
    showHeader: false
};

export const WithAlert: Story = {};
WithAlert.args = {
    alert: {
        color: 'info',
        description: 'Alert description',
        action: {
            label: 'Click me',
            onClick: () => {
                alert('alert action clicked');
            }
        }
    }
};

export const Customized: Story = {
    render: args => ({
        props: {
            showHeader: true,
            title: 'Delete this item?',
            content: '',
            secondaryButtonLabel: 'Keep it',
            primaryButtonLabel: 'Delete',
            primaryButtonColor: 'danger'
        },
        template: `
            <fusion-modal 
                [title]="title" 
                [description]="description" 
                [showHeader]="showHeader"
                [content]="content" 
                [secondaryButtonLabel]="secondaryButtonLabel"
                [primaryButtonLabel]="primaryButtonLabel"
                [primaryButtonColor]="primaryButtonColor"
              >
                  <div>Are you sure you want to delete the following item?</div>
                  <div style="display: flex; gap: 4px; align-items: center; margin-top: 25px;">
                      <div class="font-v4-heading-3">Application: </div>
                      <img style="width: 32px; height: 32px; border-radius: 6px;" alt="" loading="lazy" src="https://fusion.ironsrc.net/assets/images/v4/app_mock/Chocolate_Chip_Cookie_Game.png">
                      <fusion-icon style="width: 16px; height: 16px;" name="v4/branded/ios"></fusion-icon> 
                      <div class="font-v4-heading-4">Chocolate Chip Cookie Game</div>              
                  </div>              
            </fusion-modal>
        `
    })
};

export const Medium: Story = {};
Medium.args = {
    size: 'medium'
};

export const Large: Story = {};
Large.args = {
    size: 'large'
};
