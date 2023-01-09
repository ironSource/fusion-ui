import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TooltipComponent, TooltipModule} from './';

export default {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, TooltipModule]
        })
    ]
} as Meta<TooltipComponent>;

const TooltipTemplate: Story<TooltipComponent> = (args: TooltipComponent) => ({
    props: args
});

// region Default
export const Default = TooltipTemplate.bind({});
// endregion
