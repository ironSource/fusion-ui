import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {NAVIGATION_MENU_MOCK} from './navigation-menu.mock';
import {NavigationPrimaryMenuComponent} from '../navigation-primary-menu/navigation-primary-menu.component';

export default {
    title: 'Components/Navigation/Primary Menu',
    component: NavigationPrimaryMenuComponent,
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
        }
    },
    args: {
        menuBarItems: NAVIGATION_MENU_MOCK
    }
} as Meta<NavigationPrimaryMenuComponent>;

const DefaultTemplate: Story<NavigationPrimaryMenuComponent> = (args: NavigationPrimaryMenuComponent) => ({
    props: args,
    template: `<div style="height: 100vh">
    <fusion-navigation-primary-menu [menuBarItems]="menuBarItems"></fusion-navigation-primary-menu>
</div>`
});

export const Default = DefaultTemplate.bind({});
