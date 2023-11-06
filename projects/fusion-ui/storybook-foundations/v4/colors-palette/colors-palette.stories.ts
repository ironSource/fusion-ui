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
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`
Radix Colors scales are just simple JavaScript objects, so you can use them with your preferred styling solution easily. [radix-ui.com](https://www.radix-ui.com/colors)

To use our typography add in your *.scss
\`@import '~@ironsource/fusion-ui/style/v4/colors';\`

Or Import css file for *.css
\`@import '~@ironsource/fusion-ui/style/v4/style-guide.css';\`

        `
            },
            source: {
                code: `
// @import '@ironsource/fusion-ui/style/v4/colors'

.fusion-v4 {
  --background-default: #FFFFFF;
  --background-paper: hsl(0, 0%, 99.0%);
  --background-model-elevation: #FFFFFF;
  --background-backdrop: hsla(0, 0%, 0%, 0.11);
  --background-paper-elevation-0: hsl(0, 0%, 97.5%);
  --background-paper-elevation-1: hsl(0, 0%, 94.6%);
  --background-paper-elevation-2: hsl(0, 0%, 92.0%);
  --background-paper-elevation-3: hsl(0, 0%, 89.5%);
  --background-paper-elevation-4: hsl(0, 0%, 86.8%);
  --background-paper-elevation-5: hsl(0, 0%, 83.0%);
  --background-paper-elevation-6: hsl(0, 0%, 73.2%);
  --background-paper-elevation-7: hsl(0, 0%, 55.2%);
  --background-paper-elevation-8: hsl(0, 0%, 50.3%);
  --background-paper-elevation-9: hsl(0, 0%, 39.3%);

  --action-primary: hsl(0, 0%, 12.5%);
  --action-active: hsl(0, 0%, 50.3%);
  --action-hover: hsla(0, 0%, 0%, 0.05);
  --action-selected: hsla(0, 0%, 92%, 1);
  --action-disabled: hsla(0, 0%, 87%, 1);
  --action-disabled-background: hsla(0, 0%, 95%, 1);
  --action-focus: hsl(0, 0%, 92.0%);
  --action-outlined-border  : hsla(0, 0%, 73%, 1);

  --default-light: hsl(0, 0%, 89.5%);
  --default-main: hsl(0, 0%, 86.8%);
  --default-dark: hsl(0, 0%, 92.0%);
  --default-outlined-border: hsl(0, 0%, 73.2%);
  --default-contrast-text: hsl(0, 0%, 12.5%);
  --default-button-contrast-text: hsla(0, 0%, 0%, 1);

  --common-white: #FFFFFF;
  --common-black: #000000;
  --common-inverse-white: #FFFFFF;
  --common-inverse-black: #000000;
  --common-divider: hsl(0, 0%, 86.8%);
  --common-divider-elevation-0: hsla(0, 0%, 89%, 1);

  --text-primary: hsl(0, 0%, 12.5%);
  --text-secondary: hsl(0, 0%, 39.3%);
  --text-disabled: hsl(0, 0%, 50.3%);

  --primary-lighter: hsl(209, 100%, 96.5%);
  --primary-light: hsl(209, 95.0%, 90.1%);
  --primary-main: hsl(206, 100%, 50.0%);
  --primary-main-8-p: hsla(206, 100%, 50%, 0.08);
  --primary-main-50-p: hsla(206, 100%, 50%, 0.5);
  --primary-dark: hsl(208, 93.5%, 47.4%);
  --primary-darker: hsl(211, 90.0%, 42.0%);
  --primary-outlined-border: hsl(206, 100%, 50.0%);
  --primary-contrast-text: hsl(216, 71.0%, 23.0%);
  --primary-button-contrast-text: hsla(0, 0%, 100%, 1);

  --info-lighter: hsl(223, 98.4%, 97.1%);
  --info-light: hsl(224, 87.1%, 92.0%);
  --info-main: hsl(226, 70.0%, 55.5%);
  --info-main-8-p: hsla(226, 70%, 55.5%, 0.08);
  --info-main-50-p: hsla(226, 70%, 55.5%, 0.5);
  --info-dark: hsl(226, 58.6%, 51.3%);
  --info-darker: hsl(226, 55.0%, 45.0%);
  --info-outlined-border: hsl(226, 70.0%, 55.5%);
  --info-contrast-text: hsl(226, 50.0%, 24.0%);
  --info-button-contrast-text: hsla(0, 0%, 100%, 1);

  --success-lighter: hsl(139, 55.2%, 94.5%);
  --success-light: hsl(141, 43.7%, 86.0%);
  --success-main: hsl(151, 55.0%, 41.5%);
  --success-main-8-p: hsla(151, 55%, 41.5%, 0.08);
  --success-main-50-p: hsla(151, 55%, 41.5%, 0.5);
  --success-dark: hsl(152, 57.5%, 37.6%);
  --success-darker: hsl(153, 67.0%, 28.5%);
  --success-outlined-border: hsl(151, 55.0%, 41.5%);
  --success-contrast-text: hsl(155, 40.0%, 16.5%);
  --success-button-contrast-text: hsla(0, 0%, 100%, 1);

  --warning-lighter: hsl(45, 100%, 90.8%);
  --warning-light: hsl(40, 100%, 81.5%);
  --warning-main: hsl(42, 100%, 62.0%);
  --warning-main-8-p: hsla(42, 100%, 62%, 0.08);
  --warning-main-50-p: hsla(42, 100%, 62%, 0.5);
  --warning-dark: hsl(42, 100%, 55.0%);
  --warning-darker: hsl(25, 50.0%, 38.0%);
  --warning-outlined-border: hsl(42, 100%, 62.0%);
  --warning-contrast-text: hsl(25, 40.0%, 22.0%);
  --warning-button-contrast-text: hsla(24, 40%, 22%, 1);

  --error-lighter: hsl(360, 100%, 96.8%);
  --error-light: hsl(360, 90.2%, 91.9%);
  --error-main: hsl(358, 75.0%, 59.0%);
  --error-main-8-p: hsla(358, 75%, 59%, 0.08);
  --error-main-50-p: hsla(358, 75%, 59%, 0.5);
  --error-dark: hsl(358, 67.4%, 54.6%);
  --error-darker: hsl(358, 65.0%, 47.0%);
  --error-outlined-border: hsl(358, 75.0%, 59.0%);
  --error-contrast-text: hsl(350, 63.0%, 24.0%);
  --error-button-contrast-text: hsla(0, 0%, 100%, 1);

  --aba: #FFC134;
  --abb: #4F4FF5;
}
        `,
                language: 'css'
            }
        }
    }
};

export default meta;
type Story = StoryObj<ColorsPaletteComponent>;

export const Palette: Story = {
    name: 'Palette colors'
};
