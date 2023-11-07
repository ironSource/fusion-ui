import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {BorderRadiusComponent} from './border-radius.component';

const meta: Meta<BorderRadiusComponent> = {
    title: 'V4/Foundation/Border radius',
    component: BorderRadiusComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<BorderRadiusComponent>;

export const Palette: Story = {
    name: 'Border radius'
};
