import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {FlagComponent} from './flag.component';

export default {
    title: 'V4/Components/Flag',
    component: FlagComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***FlagComponent*** is a reusable element designed to display flags of different countries on web application.

                *It is a standalone component.*

                ***Inputs:***
                - \`countryCode\`: ISO 3166-1-alpha-2 (lower case) code of a country. https://www.iso.org/obp/ui/#search/code/
                - \`size\`: flag size in pixels. Default value is 16.
                - \`rounded\`: flag border radius. Default value is true.
                - \`borderRadius\`: border radius of the flag. Default value is 50% if rounded = true.

                minimum code in template require to display flag:
                \`<fusion-flag countryCode="ca"></fusion-flag>\`
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        countryCode: 'ca',
        size: 16, // default 16
        rounded: true, // default true
        borderRadius: '0' // default 50%
    }
} as Meta<FlagComponent>;

type Story = StoryObj<FlagComponent>;

export const Default: Story = {
    render: args => ({
        props: args,
        template: `
        <fusion-flag [countryCode]="countryCode" [size]="size" [rounded]="rounded" [borderRadius]="borderRadius"></fusion-flag>
`
    })
};

export const NotRounded: Story = {
    render: args => ({
        props: {...args, rounded: false},
        template: `
        <fusion-flag [countryCode]="countryCode" [size]="size" [rounded]="rounded" [borderRadius]="borderRadius"></fusion-flag>
`
    })
};
