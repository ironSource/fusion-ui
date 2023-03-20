import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from '../layout.component';
import {HEADER_CONTENT_MOCK, NAVIGATION_MENU_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutStoryWrapperComponent} from './layout-story-wrapper.component';
import {HeaderContent} from '@ironsource/fusion-ui/components/layout/v4/layout.entities';

export default {
    title: 'Components/Layout',
    component: LayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, LayoutStoryWrapperComponent]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/RO1s5kunvJuWbnb9tebZDA/%F0%9F%9F%A2-Unity-LevelPlay-Kit---Dashboard?node-id=727%3A110807&t=Id7OdIs4FdHUCSAD-1'
        },
        docs: {
            description: {
                component: '***Layout v4*** description will be here'
            }
        },
        layout: 'fullscreen'
    },
    args: {
        headerContent: HEADER_CONTENT_MOCK,
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
    props: {...args},
    template: `<fusion-layout-story-wrapper [headerContent]="headerContent" [layoutConfiguration]="layoutConfiguration"></fusion-layout-story-wrapper>
`
});

export const Default = DefaultTemplate.bind({});
