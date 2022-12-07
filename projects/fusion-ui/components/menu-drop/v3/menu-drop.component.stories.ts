import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {MenuDropComponent} from '@ironsource/fusion-ui/components/menu-drop';
import {CommonModule} from '@angular/common';

const MOCK_MENU_ITEMS = [
    {icon: 'frame', label: 'List item 1'},
    {icon: 'frame', label: 'List item 2'},
    {icon: 'frame', label: 'List item 3'},
    {icon: 'frame', label: 'List item 4'}
];

export default {
    title: 'Components/Menu Dropdown',
    component: MenuDropComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component:
                    '**Dropdown menu** useful for example for table-rows for multiple actions. By default dropdown with menu items will be align right to button '
            }
        },
        layout: 'centered'
    },
    args: {
        menuItems: MOCK_MENU_ITEMS
    }
} as Meta<MenuDropComponent>;

const MenuDropTemplate: Story<MenuDropComponent> = (args: MenuDropComponent) => ({
    props: {...args}
});

export const Default = MenuDropTemplate.bind({});

export const AlignLeft = MenuDropTemplate.bind({});
AlignLeft.args = {
    alignLeft: true
};
