import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {SnackbarStoryWrapperComponent} from './snackbar-story-wrapper/snackbar-story-wrapper.component';
import {SnackbarService} from './snackbar.service';
import {SnackbarType} from '@ironsource/fusion-ui/components/snackbar/v4/snackbar.entities';

export default {
    title: 'V4/Components/Snackbar',
    component: SnackbarStoryWrapperComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule],
            providers: [SnackbarService]
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
        type: 'default' as SnackbarType,
        message: '',
        duration: 2000
    },
    argTypes: {
        byStatuses: {
            control: false
        },
        byPosition: {
            control: false
        }
    }
} as Meta<SnackbarStoryWrapperComponent>;

type Story = StoryObj<SnackbarStoryWrapperComponent>;

export const Basic: Story = {};
export const LongTexts: Story = {
    args: {
        title: 'Sometimes we need to show a really long title, and we do not limit it',
        message: 'Messages are not exceptions, and sometimes we need to show a really long message in the body of snackbar component'
    }
};
export const Statuses: Story = {
    args: {
        byStatuses: true
    }
};
export const ActionButton: Story = {
    args: {
        message: 'Call to action buttons could be useful even inside snackbars',
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
    }
};
export const Position: Story = {
    args: {
        byPosition: true,
        duration: 2000
    }
};
export const AlwaysVisible: Story = {
    args: {
        duration: 0,
        message: 'This snackbar will be visible until you close it manually'
    }
};
export const Duration: Story = {
    args: {
        duration: 4000,
        message: 'It will be hidden after 4s. By default it is set to 3s.'
    }
};
