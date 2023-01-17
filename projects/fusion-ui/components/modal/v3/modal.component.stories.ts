import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {ModalComponent, ModalConfiguration, ModalModule} from '@ironsource/fusion-ui/components/modal/v3';

const DEFAULT_CONFIGURATION = {
    headerText: 'Label name'
} as ModalConfiguration;

export default {
    title: 'Components/Dialog',
    component: ModalComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ModalModule]
        })
    ],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    args: {
        configuration: DEFAULT_CONFIGURATION
    }
} as Meta<ModalComponent>;

const ModalTemplate: Story<ModalComponent> = (args: ModalComponent) => ({
    props: {...args},
    template: `<style>
.content-example{
    width: 100%;
    height: 53px;
    background-color: #F1F3F4;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
hr{
    border: solid 1px #DDDFE1;
    background-color: #DDDFE1;
    margin: 20px 0;
}
</style>
<fusion-modal [configuration]="configuration" [submitPending]="submitPending">
<div class="content-example">Content item placeholder. To be replaced with component</div>
<hr/>
<div class="content-example">Content item placeholder. To be replaced with component</div>
</fusion-modal>`
});

// region Default
export const Default = ModalTemplate.bind({});
// endregion

// region WithoutFooter
export const WithoutFooter = ModalTemplate.bind({});
WithoutFooter.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        hasFooter: false
    }
};
// endregion

// region WithoutHeader
export const WithoutHeader = ModalTemplate.bind({});
WithoutHeader.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        headerText: ''
    }
};
// endregion

// region WithPrimaryPending
export const WithPrimaryPending = ModalTemplate.bind({});
WithPrimaryPending.args = {
    submitPending: true
};
// endregion

// region WithInfoTooltip
export const WithInfoTooltip = ModalTemplate.bind({});
WithInfoTooltip.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        headerInfoText: 'Info tooltip text'
    }
};
// endregion

// region WithCustomSize
export const WithCustomSize = ModalTemplate.bind({});
WithCustomSize.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            width: '600px',
            height: '600px'
        }
    }
};
// endregion

// region WithErrorOnFooter
export const WithErrorOnFooter = ModalTemplate.bind({});
WithErrorOnFooter.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        error: 'error text'
    }
};
// endregion

// region WithCustomButtonsText
export const WithCustomButtonsText = ModalTemplate.bind({});
WithCustomButtonsText.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            submitButton: {
                submitButtonText: 'Apply',
                submitButtonDisabled: false
            },
            cancelButton: {
                cancelButtonText: 'Not apply'
            }
        }
    }
};
// endregion

// region WithoutSecondaryButton
export const WithoutSecondaryButton = ModalTemplate.bind({});
WithoutSecondaryButton.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            submitButton: {
                submitButtonText: 'Apply'
            },
            cancelButton: {
                cancelButtonHidden: true
            }
        }
    }
};
// endregion

// region WithoutPrimaryButtonDisabled
export const WithoutPrimaryButtonDisabled = ModalTemplate.bind({});
WithoutPrimaryButtonDisabled.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            submitButton: {
                submitButtonText: 'Apply',
                submitButtonDisabled: true
            }
        }
    }
};
// endregion

// region WithCustomButtonsClass
export const WithCustomButtonsClass = ModalTemplate.bind({});
WithCustomButtonsClass.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            submitButton: {
                submitButtonClass: 'danger'
            },
            cancelButton: {
                cancelButtonClass: 'third'
            }
        }
    }
};
// endregion

// region WithFooterAlignLeft
export const WithFooterAlignLeft = ModalTemplate.bind({});
WithFooterAlignLeft.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        footerAlignLeft: true
    }
};
// endregion

// region WithFooterSmall
export const WithFooterSmall = ModalTemplate.bind({});
WithFooterSmall.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        footerSmall: true
    }
};
// endregion
