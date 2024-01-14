import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownOptionV4Component} from './dropdown-option-v4.component';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';

export default {
    title: 'V4/Components/Dropdown/Option',
    component: DropdownOptionV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="width: 200px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***DropdownOptionComponent***.
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            isDisabled: false
        } as DropdownOption
    }
} as Meta<DropdownOptionV4Component>;

type Story = StoryObj<DropdownOptionV4Component>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            isDisabled: true
        } as DropdownOption
    }
};

export const Selected: Story = {
    render: args => ({
        props: args,
        template: `
<style>
    ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0;
        padding: 0;
        display: list-item;
    }
</style>
<ul>
    <li class="option is-selected">
        <fusion-dropdown-option [option]="option"></fusion-dropdown-option>
    </li>
</ul>
    `
    })
};

export const Icon: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            icon: 'ph/placeholder',
            isDisabled: false
        } as DropdownOption
    }
};

export const AppAndIcon: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_43609a8611f49ebe8c8e5eeef199112b_51b1115a8ee50c907e46d380d88ce4a9.jpeg',
            icon: 'v4/branded/android',
            isDisabled: false
        } as DropdownOption
    }
};

export const App: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_43609a8611f49ebe8c8e5eeef199112b_51b1115a8ee50c907e46d380d88ce4a9.jpeg',
            isDisabled: false
        } as DropdownOption
    }
};

export const Brand: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            icon: 'v4/branded/android',
            isDisabled: false
        } as DropdownOption
    }
};

export const Flag: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            flag: 'us',
            isDisabled: false
        } as DropdownOption
    }
};

export const WithAppIconAndCaption: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Label',
            image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_43609a8611f49ebe8c8e5eeef199112b_51b1115a8ee50c907e46d380d88ce4a9.jpeg',
            icon: 'v4/branded/android',
            subText: {text: 'Caption'},
            isDisabled: false
        } as DropdownOption
    }
};

export const WithLongText: Story = {
    args: {
        option: {
            id: '1',
            displayText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.    ',
            isDisabled: false
        } as DropdownOption
    }
};
