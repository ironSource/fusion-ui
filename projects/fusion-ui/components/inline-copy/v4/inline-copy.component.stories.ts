import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InlineCopyComponent} from '@ironsource/fusion-ui/components/inline-copy';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

export default {
    title: 'V4/Components/Inline Copy',
    component: InlineCopyComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TooltipDirective]
        }),
        componentWrapperDecorator(story => `<div>${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<InlineCopyComponent>;

type Story = StoryObj<InlineCopyComponent>;

export const InlineCopy: Story = {};
InlineCopy.args = {text: 'Copy me'};

export const SizeMedium: Story = {};
SizeMedium.args = {
    text: 'It medium size',
    size: 'medium'
};

export const IconOnly: Story = {};
IconOnly.args = {
    valueToCopy: 'Value to copy',
    size: 'medium'
};

export const WithoutTooltip: Story = {};
WithoutTooltip.args = {
    text: 'No tooltip',
    suppressTooltip: true
};

export const WithoutSnackbar: Story = {};
WithoutSnackbar.args = {
    text: 'No snackbar',
    suppressSnackbar: true
};

export const IconOnLeft: Story = {};
IconOnLeft.args = {
    text: 'Icon on left',
    iconPosition: 'left'
};
