import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
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
                component: dedent`
                **Dropdown menu** useful for example for table-rows for multiple actions.
                - **buttonIcon**: optional, icon in the button. Default "more-vert"
                - **alignDropdown**: optional, open dropdown align to the button. Default - "right". For left - "left" `
            }
        }
        /*        layout: 'centered'*/
    },
    args: {
        menuItems: MOCK_MENU_ITEMS
    },
    argTypes: {
        menuItemClicked: {control: false}
    }
} as Meta<MenuDropComponent>;

const MenuDropTemplate: Story<MenuDropComponent> = (args: MenuDropComponent) => ({
    props: {...args},
    template: `<div style="margin: auto; display: flex; justify-content: center; height: 200px">
    <fusion-menu-drop
      [buttonIcon]="buttonIcon"
      [menuItems]="menuItems"
      [alignDropdown]="alignDropdown"
      (menuItemClicked)="menuItemClicked($event)"
    ></fusion-menu-drop>
</div>`
});

export const Default = MenuDropTemplate.bind({});
