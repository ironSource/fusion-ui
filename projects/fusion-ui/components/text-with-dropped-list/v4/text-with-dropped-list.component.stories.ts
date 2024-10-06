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
    }
} as Meta<TextWithDroppedListComponent>;

type Story = StoryObj<TextWithDroppedListComponent>;

export const Basic: Story = {};
