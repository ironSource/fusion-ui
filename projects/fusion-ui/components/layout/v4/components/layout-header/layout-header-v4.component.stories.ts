import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutHeaderComponent} from './layout-header.component';
import {HEADER_CONTENT_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const actionsData = {
    backButtonClicked: action('backButtonClicked')
};

const meta: Meta<LayoutHeaderComponent> = {
    title: 'V4/Components/Layout/Header',
    component: LayoutHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        headerContent: HEADER_CONTENT_MOCK
    }
};
export default meta;

const LayoutHeaderTemplate: StoryFn<LayoutHeaderComponent> = (args: LayoutHeaderComponent) => ({
    props: {...args, backButtonClicked: actionsData.backButtonClicked},
    template: `<div class="header-only-story" style="display: flex; flex-direction: column; height: 100vh">
<div [style]="!headerContent?.multiline ? 'border-bottom: solid 1px #E0E0E0; max-height: 64px;' : ''">
    <fusion-layout-header [headerContent]="headerContent" [teleportElements]="teleportElements" (backButtonClicked)="backButtonClicked($event)"></fusion-layout-header>
</div>
<div style="display: flex; align-items: center; justify-content: center; flex-grow: 1; height: 100%; background-color: #eeeeee;">main content</div>
</div>`
});

export const Default = {
    render: LayoutHeaderTemplate
};

export const MainTitleLine = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleport'}, {id: 'fuHeaderTeleportRight', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            multiline: true
        }
    }
};

export const WithTopLine = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleport'}, {id: 'fuHeaderTeleportRight', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            multiline: true,
            topRowContent: {
                show: true
            }
        }
    }
};
export const WithBottomLine = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleport'}, {id: 'fuHeaderTeleportRight', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            multiline: true,
            topRowContent: {
                show: true
            },
            bottomRowContent: {
                show: true
            }
        }
    }
};

export const MainDrilldownTeleport = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleportOne'}, {id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            hasBackButton: true,
            multiline: true
        }
    }
};
