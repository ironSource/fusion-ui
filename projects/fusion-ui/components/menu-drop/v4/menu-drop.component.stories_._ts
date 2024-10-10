import {CommonModule} from '@angular/common';
import {Meta, StoryObj, componentWrapperDecorator} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';
import {MenuDropV4Component} from '@ironsource/fusion-ui/components/menu-drop/v4/menu-drop.component';

const MOCK_MENU_ITEMS: MenuDropItem[] = [
    {icon: 'frame', label: 'List item 1'},
    {icon: 'frame', label: 'List item 2'},
    {icon: 'frame', label: 'List item 3'},
    {icon: 'frame', label: 'List item 4'}
];

const MOCK_ROW_ACTIONS = [
    {icon: 'ph/pencil-simple', label: 'Edit'},
    {icon: 'ph/copy', label: 'Duplicate'},
    {icon: 'ph/trash-simple', label: 'Delete'}
];

export default {
    title: 'V4/Components/Dropped Menu',
    component: MenuDropV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="--fu-drop-menu-width: 220px; display: block; height: 300px;">${story}</div>`)
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`
                **Dropped menu** useful for example for table-rows for multiple actions.
                - **buttonIcon**: optional, icon in the button. Default "more-vert"
                - **dropdownPosition: Position**: optional, open dropdown position. (see https://floating-ui.com/ type Position)`
            }
        }
    },
    args: {
        menuItems: MOCK_MENU_ITEMS
    },
    argTypes: {
        menuItemClicked: {control: false}
    }
} as Meta<MenuDropV4Component>;

type Story = StoryObj<MenuDropV4Component>;

export const Basic: Story = {};

export const DisabledItems: Story = {};
DisabledItems.args = {
    menuItems: MOCK_MENU_ITEMS.map((item, idx) => {
        return {...item, disabled: idx >= 2};
    })
};

export const TableRowMenu: Story = {};
TableRowMenu.args = {
    menuItems: MOCK_ROW_ACTIONS
};
