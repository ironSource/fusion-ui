import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {ModalFooterComponent} from '@ironsource/fusion-ui/components/modal';

const actionsData = {
    onCloseButtonClicked: action('onCloseButtonClicked'),
    onSubmit: action('onSubmit')
};

export default {
    title: 'Components/Dialog/Footer',
    component: ModalFooterComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ButtonModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5495%3A117996&t=IRPREwcaiSrUXuZ5-1'
        },
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    args: {
        submitButtonPending: false,
        submitButton: {
            submitButtonText: 'Button',
            submitButtonClass: '',
            submitButtonDisabled: false
        } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean},
        cancelButton: {
            cancelButtonText: 'Button',
            cancelButtonClass: 'transparent third',
            cancelButtonHidden: true
        } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
    },
    argTypes: {
        error: {
            control: 'text'
        }
    }
} as Meta<ModalFooterComponent>;

const ModalFooterTemplate: Story<ModalFooterComponent> = (args: ModalFooterComponent) => ({
    props: {...args, onCloseButtonClicked: actionsData.onCloseButtonClicked},
    template: `<div style="width: 500px; background-color: #ffffff;">
    <fusion-modal-footer class="{{footerSizeClassName}} {{footerAlignmentClassName}}"
        [submitButtonPending]="submitButtonPending"
        [submitButton]="submitButton"
        [cancelButton]="cancelButton"
        [error]="error"
        (onCloseButtonClicked)="onCloseButtonClicked($event)"
        (onSubmit)="onSubmit($event)"
      ></fusion-modal-footer>
</div>`
});

// region Default
export const Default = ModalFooterTemplate.bind({});
// endregion

// region PendingPrimaryButton
export const PendingPrimaryButton = ModalFooterTemplate.bind({});
PendingPrimaryButton.args = {
    submitButtonPending: true
};
// endregion

// region PrimaryButtonDisable
export const PrimaryButtonDisable = ModalFooterTemplate.bind({});
PrimaryButtonDisable.args = {
    submitButton: {
        submitButtonText: 'Button',
        submitButtonClass: '',
        submitButtonDisabled: true
    } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean}
};
// endregion

// region PrimaryAndSecondary
export const PrimaryAndSecondary = ModalFooterTemplate.bind({});
PrimaryAndSecondary.args = {
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
};
// endregion

// region PendingPrimaryAndSecondary
export const PendingPrimaryAndSecondary = ModalFooterTemplate.bind({});
PendingPrimaryAndSecondary.args = {
    submitButtonPending: true,
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
};
// endregion

// region PrimaryAndSecondaryAndError
export const PrimaryAndSecondaryAndError = ModalFooterTemplate.bind({});
PrimaryAndSecondaryAndError.args = {
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean},
    error: 'Error message...'
};
// endregion

// region Small
export const Small = ModalFooterTemplate.bind({});
Small.args = {
    footerSizeClassName: 'fu-small',
    submitButton: {
        submitButtonText: 'Button',
        submitButtonClass: 'small',
        submitButtonDisabled: false
    } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean}
};
// endregion

// region SmallPrimaryAndSecondary
export const SmallPrimaryAndSecondary = ModalFooterTemplate.bind({});
SmallPrimaryAndSecondary.args = {
    footerSizeClassName: 'fu-small',
    submitButton: {
        submitButtonText: 'Button',
        submitButtonClass: 'small',
        submitButtonDisabled: false
    } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean},
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third small',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
};
// endregion

// region SmallPendingPrimaryAndSecondary
export const SmallPendingPrimaryAndSecondary = ModalFooterTemplate.bind({});
SmallPendingPrimaryAndSecondary.args = {
    submitButtonPending: true,
    footerSizeClassName: 'fu-small',
    submitButton: {
        submitButtonText: 'Button',
        submitButtonClass: 'small',
        submitButtonDisabled: false
    } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean},
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third small',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
};
// endregion

// region SmallPrimaryAndSecondaryAndError
export const SmallPrimaryAndSecondaryAndError = ModalFooterTemplate.bind({});
SmallPrimaryAndSecondaryAndError.args = {
    footerSizeClassName: 'fu-small',
    submitButton: {
        submitButtonText: 'Button',
        submitButtonClass: 'small',
        submitButtonDisabled: false
    } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean},
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third small',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean},
    error: 'Error message...'
};
// endregion

// region AlignmentLeft
export const AlignmentLeft = ModalFooterTemplate.bind({});
AlignmentLeft.args = {
    footerAlignmentClassName: 'fu-alignment-left'
};
// endregion

// region AlignmentLeftPrimaryAndSecondaryAndError
export const AlignmentLeftPrimaryAndSecondaryAndError = ModalFooterTemplate.bind({});
AlignmentLeftPrimaryAndSecondaryAndError.args = {
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean},
    error: 'Error message...',
    footerAlignmentClassName: 'fu-alignment-left'
};
// endregion

// region AlignmentLeftPrimaryAndSecondaryAndErrorSmall
export const AlignmentLeftPrimaryAndSecondaryAndErrorSmall = ModalFooterTemplate.bind({});
AlignmentLeftPrimaryAndSecondaryAndErrorSmall.args = {
    submitButton: {
        submitButtonText: 'Button',
        submitButtonClass: 'small',
        submitButtonDisabled: false
    } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean},
    cancelButton: {
        cancelButtonText: 'Button',
        cancelButtonClass: 'transparent third small',
        cancelButtonHidden: false
    } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean},
    error: 'Error message...',
    footerAlignmentClassName: 'fu-alignment-left',
    footerSizeClassName: 'fu-small'
};
// endregion
