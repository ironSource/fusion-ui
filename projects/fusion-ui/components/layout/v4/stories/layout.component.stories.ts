import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from '../layout.component';
import {NAVIGATION_MENU_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const actionsData = {
    onMenuItemClick: action('onMenuItemClick')
};

export default {
    title: 'Components/Layout',
    component: LayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/RO1s5kunvJuWbnb9tebZDA/%F0%9F%9F%A2-Unity-LevelPlay-Kit---Dashboard?node-id=727%3A110807&t=Id7OdIs4FdHUCSAD-1'
        },
        docs: {
            description: {
                component: '***Navigation Bar*** is a part of main navigation menu'
            }
        },
        layout: 'fullscreen'
    },
    args: {
        layoutConfiguration: {
            navigationMenuItems: NAVIGATION_MENU_MOCK,
            layoutUser: {
                name: 'Jonny Kim',
                email: 'jonny.kim@supercell.com'
            }
        }
    }
} as Meta<LayoutComponent>;

const DefaultTemplate: Story<LayoutComponent> = (args: LayoutComponent) => ({
    props: {...args, onMenuItemClick: actionsData.onMenuItemClick},
    template: `<fusion-layout
        [configuration]="layoutConfiguration"
        (menuItemClick)="onMenuItemClick($event)"
    ></fusion-layout>
`
});

export const Default = DefaultTemplate.bind({});
