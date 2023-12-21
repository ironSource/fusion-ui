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
    template: `<div class="display: flex; flex-direction: column;">
<div [style]="!headerContent?.multiline ? 'border-bottom: solid 1px #E0E0E0; max-height: 64px;' : ''">
    <fusion-layout-header [headerContent]="headerContent" [teleportElements]="teleportElements" (backButtonClicked)="backButtonClicked($event)"></fusion-layout-header>
</div>
<div style="display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #eeeeee;">main content</div>
</div>`
});

export const MainTitleLine = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            multiline: true
        }
    }
};

export const WithTopLine = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            multiline: true,
            topRowContent: {
                teleportElements: [{id: 'fuHeaderTopTeleport'}]
            }
        }
    }
};
export const WithBottomLine = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            multiline: true,
            topRowContent: {
                teleportElements: [{id: 'fuHeaderTopTeleport'}]
            },
            bottomRowContent: {
                teleportElements: [{id: 'fuHeaderBottomTeleport'}]
            }
        }
    }
};

export const MainDrilldownTeleport = {
    render: LayoutHeaderTemplate,
    args: {
        teleportElements: [{id: 'fuHeaderTeleportOne'}, {id: 'fuHeaderTeleportTwo'}, {id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            hasBackButton: true,
            multiline: true,
            drilldown: true
        }
    }
};
