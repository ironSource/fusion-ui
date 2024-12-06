import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {ModalFooterComponent} from '@ironsource/fusion-ui/components/modal';

const actionsData = {
    closeButtonClicked: action('closeButtonClicked'),
    primaryButtonClicked: action('primaryButtonClicked')
};

export default {
    title: 'V3/Components/Dialog/Footer',
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

const ModalFooterTemplate: StoryFn<ModalFooterComponent> = args => ({
    props: {...args, closeButtonClicked: actionsData.closeButtonClicked},
    template: `<div style="width: 500px; background-color: #ffffff;">
    <fusion-modal-footer class="{{footerSizeClassName}} {{footerAlignmentClassName}}"
        [submitButtonPending]="submitButtonPending"
        [submitButton]="submitButton"
        [cancelButton]="cancelButton"
        [error]="error"
        (closeButtonClicked)="closeButtonClicked($event)"
        (primaryButtonClicked)="primaryButtonClicked($event)"
      ></fusion-modal-footer>
</div>`
});

export const Default = {
    render: ModalFooterTemplate
};

export const PendingPrimaryButton = {
    render: ModalFooterTemplate,

    args: {
        submitButtonPending: true
    }
};

export const PrimaryButtonDisable = {
    render: ModalFooterTemplate,

    args: {
        submitButton: {
            submitButtonText: 'Button',
            submitButtonClass: '',
            submitButtonDisabled: true
        } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean}
    }
};

export const PrimaryAndSecondary = {
    render: ModalFooterTemplate,

    args: {
        cancelButton: {
            cancelButtonText: 'Button',
            cancelButtonClass: 'transparent third',
            cancelButtonHidden: false
        } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
    }
};

export const PendingPrimaryAndSecondary = {
    render: ModalFooterTemplate,

    args: {
        submitButtonPending: true,
        cancelButton: {
            cancelButtonText: 'Button',
            cancelButtonClass: 'transparent third',
            cancelButtonHidden: false
        } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean}
    }
};

export const PrimaryAndSecondaryAndError = {
    render: ModalFooterTemplate,

    args: {
        cancelButton: {
            cancelButtonText: 'Button',
            cancelButtonClass: 'transparent third',
            cancelButtonHidden: false
        } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean},
        error: 'Error message...'
    }
};

export const Small = {
    render: ModalFooterTemplate,

    args: {
        footerSizeClassName: 'fu-small',
        submitButton: {
            submitButtonText: 'Button',
            submitButtonClass: 'small',
            submitButtonDisabled: false
        } as {submitButtonText?: string; submitButtonClass?: string; submitButtonDisabled?: boolean}
    }
};

export const SmallPrimaryAndSecondary = {
    render: ModalFooterTemplate,

    args: {
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
    }
};

export const SmallPendingPrimaryAndSecondary = {
    render: ModalFooterTemplate,

    args: {
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
    }
};

export const SmallPrimaryAndSecondaryAndError = {
    render: ModalFooterTemplate,

    args: {
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
    }
};

export const AlignmentLeft = {
    render: ModalFooterTemplate,

    args: {
        footerAlignmentClassName: 'fu-alignment-left'
    }
};

export const AlignmentLeftPrimaryAndSecondaryAndError = {
    render: ModalFooterTemplate,

    args: {
        cancelButton: {
            cancelButtonText: 'Button',
            cancelButtonClass: 'transparent third',
            cancelButtonHidden: false
        } as {cancelButtonText?: string; cancelButtonClass?: string; cancelButtonHidden?: boolean},
        error: 'Error message...',
        footerAlignmentClassName: 'fu-alignment-left'
    }
};

export const AlignmentLeftPrimaryAndSecondaryAndErrorSmall = {
    render: ModalFooterTemplate,

    args: {
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
    }
};
