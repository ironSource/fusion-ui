import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {ColorsPaletteComponent} from './colors-palette.component';

const meta: Meta<ColorsPaletteComponent> = {
    title: 'V4/Foundation/Palette colors',
    component: ColorsPaletteComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<ColorsPaletteComponent>;

export const Palette: Story = {
    name: 'Palette colors'
};
