import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TextWithDroppedListComponent} from './text-with-dropped-list.component';

export default {
    title: 'V4/Components/DataDisplay/Text with dropped list',
    component: TextWithDroppedListComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        }),
        componentWrapperDecorator(story => `<div>${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        text: 'Text with help border'
    }
} as Meta<TextWithDroppedListComponent>;

type Story = StoryObj<TextWithDroppedListComponent>;

export const Basic: Story = {};

export const Size: Story = {
    render: args => ({
        props: {...args},
        template: `
<div style="display: flex; flex-direction: column; gap: 24px;">
    <fusion-text-with-dropped-list [text]="text"></fusion-text-with-dropped-list>
    <fusion-text-with-dropped-list size="small" [text]="text"></fusion-text-with-dropped-list>    
</div>
`
    })
};

export const Disabled: Story = {
    render: args => ({
        props: {...args},
        template: `
<div style="display: flex; flex-direction: column; gap: 24px;">
    <fusion-text-with-dropped-list [disabled]="true" [text]="text"></fusion-text-with-dropped-list>
    <fusion-text-with-dropped-list [disabled]="true" size="small" [text]="text"></fusion-text-with-dropped-list>    
</div>
`
    })
};
