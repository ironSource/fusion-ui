import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {SnackbarComponent} from './snackbar.component';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';

export default {
    title: 'V4/Components/Snackbar',
    component: SnackbarComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, ButtonComponent]
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
        title: 'This is snackbar message',
        type: 'default',
        message: '',
        duration: null as number
    }
} as Meta<SnackbarComponent>;

type Story = StoryObj<SnackbarComponent>;

export const Basic: Story = {};

export const WithDescription: Story = {
    args: {
        message: 'You successfully read this alert message'
    }
};

export const LongText: Story = {
    args: {
        title: 'Sometimes we need to show a really long title, and we do not limit it',
        message: 'Messages are not exceptions, and sometimes we need to show a really long message in the body of snackbar component'
    }
};

export const Statuses: Story = {
    render: args => ({
        props: args,
        template: `<div style="display: flex; gap: 16px">
<fusion-snackbar [title]="title" [message]="message" [duration]="duration"></fusion-snackbar>
<fusion-snackbar [title]="title" [message]="message" [duration]="duration" type="error"></fusion-snackbar>
<fusion-snackbar [title]="title" [message]="message" [duration]="duration" type="success"></fusion-snackbar>
</div>`
    })
};

export const WithActionButtons: Story = {
    render: args => ({
        props: {
            ...args,
            actionButtons: [
                {
                    label: 'Show logs',
                    size: 'small',
                    variant: 'outlined',
                    color: 'primary',
                    onClick: () => {
                        alert('Show logs CTA trigger!');
                    }
                },
                {
                    label: 'Cancel',
                    size: 'small',
                    variant: 'outlined',
                    onClick: () => {
                        alert('Cancel CTA trigger!');
                    }
                }
            ]
        },
        template: `<fusion-snackbar [actionButtons]="actionButtons" [title]="title" [message]="message" [type]="type" [duration]="duration"></fusion-snackbar>`
    })
};
