import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {ModalHeaderComponent} from '@ironsource/fusion-ui/components/modal';

const actionsData = {
    close: action('close')
};

export default {
    title: 'Components/Dialog/Header',
    component: ModalHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TooltipModule]
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
        headerText: 'Label name',
        showCloseButton: true
    }
} as Meta<ModalHeaderComponent>;

const ModalHeaderTemplate: Story<ModalHeaderComponent> = (args: ModalHeaderComponent) => ({
    props: {...args, close: actionsData.close},
    template: `<div style="width: 500px; background-color: #ffffff;">
    <fusion-modal-header
        [headerText]="headerText"
        [showCloseButton]="showCloseButton"
        [infoText]="infoText"
        (close)="close($event)"
      ></fusion-modal-header>
</div>`
});

// region Default
export const Default = ModalHeaderTemplate.bind({});
// endregion

// region NoCloseButton
export const NoCloseButton = ModalHeaderTemplate.bind({});
NoCloseButton.args = {
    showCloseButton: false
};
// endregion

// region WithInfoTooltip
export const WithInfoTooltip = ModalHeaderTemplate.bind({});
WithInfoTooltip.args = {
    infoText: 'Info tooltip text.',
    showCloseButton: false
};
// endregion

// region WithInfoTooltipAndCloseButton
export const WithInfoTooltipAndCloseButton = ModalHeaderTemplate.bind({});
WithInfoTooltipAndCloseButton.args = {
    infoText: 'Info tooltip text.'
};
// endregion
