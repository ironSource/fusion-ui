import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {TooltipComponent, TooltipModule} from './';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

export default {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, TooltipModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5470%3A104456&t=y6EJ8bDv5djsnAXo-1'
        },
        docs: {
            description: {
                component: dedent`***Tooltip*** Use tooltips to showcase additional information to help users understand what is going on in a particular section of our planetary system. Tooltips can be automatically triggered, or be represented by an icon, for example, an information icon with the letter “i”.

Do consider the possibility of users not noticing the tooltip at first glance, especially for those represented as an icon. This makes it important to ensure that tooltip information is succinct, useful and trivial.`
            }
        },
        layout: 'centered'
    },
    args: {
        fusionTooltipText: 'This is a single line tooltip with no wrapping text',
        tooltipPosition: TooltipPosition.Top
    }
} as Meta<TooltipComponent>;

const TooltipTemplate: Story<TooltipComponent> = (args: TooltipComponent) => ({
    props: args,
    template: `<div [fusionTooltip]="fusionTooltipText" [tooltipPosition]="tooltipPosition">I am a tooltip</div>`
});

// region Default
export const Default = TooltipTemplate.bind({});
// endregion

// region PositionBottom
export const PositionBottom = TooltipTemplate.bind({});
PositionBottom.args = {
    tooltipPosition: TooltipPosition.Bottom
};
// endregion
